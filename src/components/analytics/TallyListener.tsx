'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import {
  calculateQuotePrice,
  normalizeService,
  normalizeFrequency,
  type ServiceType,
  type Frequency,
} from '@/lib/pricing';

const TALLY_ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?tally\.so$/i;

// Google Ads conversion tracking — Houston account
// Account: AW-17742166397 · Conversion label: oMd3CLb58cMbEP3yj4xC
const GOOGLE_ADS_ACCOUNT_ID = 'AW-17742166397';
const GOOGLE_ADS_LEAD_SEND_TO = `${GOOGLE_ADS_ACCOUNT_ID}/oMd3CLb58cMbEP3yj4xC`;

// LTV multipliers for recurring services.
// visits/year × 0.5 retention factor (industry standard ~50% retention at 1yr for residential cleaning).
// Tells Google Ads the true lifetime value of a recurring lead so PMax optimizes toward it.
const LTV_MULTIPLIERS: Record<Frequency, number> = {
  weekly: 26,
  biweekly: 13,
  monthly: 6,
};

// Fallback value for manual-quote services (commercial/windows/postconstruction) or parse failures.
// Aligned with biweekly midpoint for Houston — safe conservative default that keeps the conversion in Ads.
const FALLBACK_VALUE = 145;

type DataLayerEvent = Record<string, unknown>;

type WindowWithDataLayerAndGtag = Window & {
  dataLayer?: DataLayerEvent[];
  gtag?: (...args: unknown[]) => void;
  __tallyDebug?: boolean;
  __kcAdsConfigured?: boolean;
};

function safeParse<T = unknown>(v: unknown): T | null {
  if (typeof v !== 'string') return (v ?? null) as T | null;
  try { return JSON.parse(v) as T; } catch { return null; }
}

function isDuplicate(submissionId?: string | null): boolean {
  if (!submissionId) return false;
  try {
    const key = `tally_submit_${submissionId}`;
    if (sessionStorage.getItem(key)) return true;
    sessionStorage.setItem(key, '1');
  } catch { /* ignore */ }
  return false;
}

function readAnswerString(answer: unknown): string | null {
  const visit = (value: unknown, depth = 0): string | null => {
    if (depth > 5 || value == null) return null;

    if (typeof value === 'string') {
      const trimmed = value.trim();
      return trimmed ? trimmed : null;
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }

    if (Array.isArray(value)) {
      const parts = value
        .map((item) => visit(item, depth + 1))
        .filter((item): item is string => Boolean(item));
      return parts.length > 0 ? parts.join(', ') : null;
    }

    if (typeof value === 'object') {
      const obj = value as Record<string, unknown>;
      for (const key of ['value', 'text', 'choice', 'label']) {
        const extracted = visit(obj[key], depth + 1);
        if (extracted) return extracted;
      }
      for (const nested of Object.values(obj)) {
        const extracted = visit(nested, depth + 1);
        if (extracted) return extracted;
      }
    }

    return null;
  };

  return visit(answer);
}

function readFieldValue(field: Record<string, unknown> | undefined): string | null {
  if (!field) return null;
  const nestedAnswer =
    typeof field.answer === 'object' && field.answer !== null
      ? (field.answer as Record<string, unknown>)
      : null;
  if (nestedAnswer && typeof nestedAnswer.value === 'string') {
    const directValue = nestedAnswer.value.trim();
    if (directValue) return directValue;
  }
  return readAnswerString(field.answer ?? field.value);
}

function findFieldByTitle(
  answers: Record<string, unknown>[],
  title: string,
): Record<string, unknown> | undefined {
  return answers.find((field) => {
    if (typeof field.title === 'string' && field.title === title) return true;
    if (typeof field.label === 'string' && field.label === title) return true;
    return false;
  });
}

// Parse sqft string like "1501 to 2000 sq ft", "1,000 - 1,500 sq ft", "6000+" → midpoint number.
// Aligned with HOUSTON_ONE_TIME_PRICES / HOUSTON_RECURRING_PRICES brackets in lib/pricing.ts.
function parseSqftRange(raw: string | null | undefined): number {
  if (!raw) return 1750;
  const cleaned = raw.replace(/,/g, '').toLowerCase();

  // 6000+ or 6,000+ or "over 6000"
  if (/6\s*0{3}\s*\+/.test(cleaned) || /over\s+6/.test(cleaned)) return 6500;

  // Range form: "X to Y" or "X - Y" or "X – Y"
  const rangeMatch = cleaned.match(/(\d{3,5})\s*(?:to|-|–|—|through)\s*(\d{3,5})/);
  if (rangeMatch?.[1] && rangeMatch[2]) {
    const low = Number.parseInt(rangeMatch[1], 10);
    const high = Number.parseInt(rangeMatch[2], 10);
    if (Number.isFinite(low) && Number.isFinite(high) && high >= low) {
      return Math.round((low + high) / 2);
    }
  }

  // Single number (e.g. "1750" or "1750 sq ft")
  const singleMatch = cleaned.match(/(\d{3,5})/);
  if (singleMatch?.[1]) {
    const n = Number.parseInt(singleMatch[1], 10);
    if (Number.isFinite(n) && n > 0) return n;
  }

  return 1750;
}

function computeConversionValue(opts: {
  service: ServiceType | null;
  frequency: Frequency | null;
  sqft: number;
}): { value: number; baseValue: number | null; multiplier: number } {
  const { service, frequency, sqft } = opts;
  const baseValue = service ? calculateQuotePrice(service, sqft, frequency ?? undefined) : null;

  if (baseValue === null) {
    return { value: FALLBACK_VALUE, baseValue: null, multiplier: 1 };
  }

  if (service === 'recurring' && frequency && LTV_MULTIPLIERS[frequency]) {
    const multiplier = LTV_MULTIPLIERS[frequency];
    return { value: baseValue * multiplier, baseValue, multiplier };
  }

  return { value: baseValue, baseValue, multiplier: 1 };
}

type EnrichedPayload = {
  formId: string | null;
  formName: string | null;
  submissionId: string | null;
  value: number;
  baseValue: number | null;
  multiplier: number;
  service: ServiceType | null;
  frequency: Frequency | null;
  sqft: number;
};

function extractFromTallyPayload(payloadObj: Record<string, unknown>): EnrichedPayload {
  const formId = typeof payloadObj.formId === 'string' ? payloadObj.formId : null;
  const formName = typeof payloadObj.formName === 'string' ? payloadObj.formName : null;
  const submissionId =
    (typeof payloadObj.submissionId === 'string' ? payloadObj.submissionId : null) ??
    (typeof payloadObj.id === 'string' ? payloadObj.id : null);

  const answersRaw =
    (Array.isArray(payloadObj.answers) ? payloadObj.answers : null) ??
    (Array.isArray(payloadObj.fields) ? payloadObj.fields : []);
  const answers = answersRaw.filter(
    (a): a is Record<string, unknown> => typeof a === 'object' && a !== null,
  );

  const rawCategory = readFieldValue(
    findFieldByTitle(answers, 'What type of service are you looking for?'),
  );
  const rawCleaningType = readFieldValue(
    findFieldByTitle(answers, 'What type of cleaning do you need?'),
  );
  const rawFrequency = readFieldValue(
    findFieldByTitle(answers, 'How often would you like us to clean?'),
  );
  const rawSqft = readFieldValue(
    findFieldByTitle(answers, "What's the sq ft of the home or area you'd like cleaned?"),
  );

  // Category overrides for non-residential paths.
  const category = normalizeService(rawCategory);
  const service: ServiceType | null =
    category === 'commercial' || category === 'windows' || category === 'postconstruction'
      ? category
      : normalizeService(rawCleaningType);
  const frequency = service === 'recurring' ? normalizeFrequency(rawFrequency) : null;
  const sqft = parseSqftRange(rawSqft);

  const { value, baseValue, multiplier } = computeConversionValue({ service, frequency, sqft });

  return {
    formId,
    formName,
    submissionId,
    value,
    baseValue,
    multiplier,
    service,
    frequency,
    sqft,
  };
}

function pushDataLayer(payload: EnrichedPayload & { source: 'tally_iframe' | 'tally_dom' }) {
  const w = window as WindowWithDataLayerAndGtag;
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];

  // Legacy event — kept for backward compat with any existing GTM tags listening to tally_form_submitted.
  w.dataLayer.push({
    event: 'tally_form_submitted',
    formId: payload.formId ?? undefined,
    formName: payload.formName ?? undefined,
    submissionId: payload.submissionId ?? undefined,
    source: payload.source,
  });

  // Conversion event with real LTV-adjusted value.
  w.dataLayer.push({
    event: 'kc_quote_submit',
    transaction_id: payload.submissionId ?? undefined,
    value: payload.value,
    base_value: payload.baseValue ?? FALLBACK_VALUE,
    ltv_multiplier: payload.multiplier,
    currency: 'USD',
    service_type: payload.service ?? 'unknown',
    frequency: payload.frequency ?? 'none',
    sqft: payload.sqft,
    market: 'houston',
    source: payload.source,
  });
}

function fireGoogleAdsLeadConversion(opts: {
  value: number;
  transactionId?: string | null;
}): boolean {
  const w = window as WindowWithDataLayerAndGtag;
  if (typeof w.gtag !== 'function') return false;
  try {
    if (!w.__kcAdsConfigured) {
      w.gtag('config', GOOGLE_ADS_ACCOUNT_ID);
      w.__kcAdsConfigured = true;
    }
    w.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_LEAD_SEND_TO,
      value: opts.value,
      currency: 'USD',
      transaction_id: opts.transactionId ?? undefined,
    });
    return true;
  } catch {
    return false;
  }
}

function trackPosthogLead(payload: EnrichedPayload & { source: 'tally_iframe' | 'tally_dom' }) {
  try {
    if (!posthog) return;
    posthog.capture('lead_submit', {
      formId: payload.formId ?? undefined,
      formName: payload.formName ?? undefined,
      submissionId: payload.submissionId ?? undefined,
      source: payload.source,
      value: payload.value,
      base_value: payload.baseValue,
      ltv_multiplier: payload.multiplier,
      service_type: payload.service ?? 'unknown',
      frequency: payload.frequency ?? 'none',
      sqft: payload.sqft,
      market: 'houston',
      path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    });
  } catch (e) {
    console.error('PostHog lead_submit failed (kathy)', e);
  }
}

function debugLog(label: string, payload: EnrichedPayload & { source: string }) {
  if (process.env.NEXT_PUBLIC_DEBUG_TRACKING !== 'true') return;
  try {
    console.log(`[TallyListener] ${label}`, {
      submissionId: payload.submissionId,
      service: payload.service,
      frequency: payload.frequency,
      sqft: payload.sqft,
      base_value: payload.baseValue,
      ltv_multiplier: payload.multiplier,
      value: payload.value,
      source: payload.source,
    });
  } catch {}
}

export default function TallyListener() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.origin || !TALLY_ORIGIN_RE.test(e.origin)) return;

      const parsed = safeParse<unknown>(e.data);
      const isSubmitted =
        typeof parsed === 'object' &&
        parsed !== null &&
        ((parsed as { event?: unknown }).event === 'Tally.FormSubmitted' ||
          (parsed as { type?: unknown }).type === 'FORM_SUBMITTED');
      if (!isSubmitted) return;

      const p = (parsed as { payload?: unknown }).payload;
      const payloadObj = (typeof p === 'object' && p !== null ? p : {}) as Record<string, unknown>;
      const enriched = extractFromTallyPayload(payloadObj);

      if (isDuplicate(enriched.submissionId)) {
        try { console.log('[Tally] duplicate (iframe) ignored', enriched.submissionId); } catch {}
        return;
      }

      const withSource = { ...enriched, source: 'tally_iframe' as const };

      pushDataLayer(withSource);
      trackPosthogLead(withSource);
      fireGoogleAdsLeadConversion({
        value: enriched.value,
        transactionId: enriched.submissionId,
      });
      debugLog('conversion (iframe)', withSource);
    };

    const onCustomEvent = (ev: Event) => {
      const detail = (ev as CustomEvent).detail || {};
      const payloadObj = (typeof detail === 'object' && detail !== null ? detail : {}) as Record<string, unknown>;
      const enriched = extractFromTallyPayload(payloadObj);

      if (isDuplicate(enriched.submissionId)) {
        try { console.log('[Tally] duplicate (dom) ignored', enriched.submissionId); } catch {}
        return;
      }

      const withSource = { ...enriched, source: 'tally_dom' as const };

      pushDataLayer(withSource);
      trackPosthogLead(withSource);
      fireGoogleAdsLeadConversion({
        value: enriched.value,
        transactionId: enriched.submissionId,
      });
      debugLog('conversion (dom)', withSource);
    };

    window.addEventListener('message', onMessage);
    window.addEventListener('tally:form-submitted', onCustomEvent as EventListener);

    return () => {
      window.removeEventListener('message', onMessage);
      window.removeEventListener('tally:form-submitted', onCustomEvent as EventListener);
    };
  }, []);

  return null;
}
