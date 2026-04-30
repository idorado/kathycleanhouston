'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js';

const TALLY_ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?tally\.so$/i;

// Google Ads conversion tracking — Houston account
// Account: AW-17742166397 · Conversion label: oMd3CLb58cMbEP3yj4xC
const GOOGLE_ADS_ACCOUNT_ID = 'AW-17742166397';
const GOOGLE_ADS_LEAD_SEND_TO = `${GOOGLE_ADS_ACCOUNT_ID}/oMd3CLb58cMbEP3yj4xC`;

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

function pushDataLayer(payload: {
  formId?: string | null;
  formName?: string | null;
  submissionId?: string | null;
  source: 'tally_iframe' | 'tally_dom';
}) {
  const w = window as WindowWithDataLayerAndGtag;
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  w.dataLayer.push({
    event: 'tally_form_submitted',
    formId: payload.formId ?? undefined,
    formName: payload.formName ?? undefined,
    submissionId: payload.submissionId ?? undefined,
    source: payload.source,
  });
}

function fireGoogleAdsLeadConversion(): boolean {
  const w = window as WindowWithDataLayerAndGtag;
  if (typeof w.gtag !== 'function') return false;
  try {
    if (!w.__kcAdsConfigured) {
      w.gtag('config', GOOGLE_ADS_ACCOUNT_ID);
      w.__kcAdsConfigured = true;
    }
    w.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_LEAD_SEND_TO,
      value: 1.0,
      currency: 'USD',
    });
    return true;
  } catch {
    return false;
  }
}

function trackPosthogLead({
  formId,
  formName,
  submissionId,
  source,
}: {
  formId?: string;
  formName?: string;
  submissionId?: string;
  source: 'tally_iframe' | 'tally_dom';
}) {
  try {
    if (!posthog) return;
    posthog.capture('lead_submit', {
      formId,
      formName,
      submissionId,
      source,
      path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    });
  } catch (e) {
    console.error('PostHog lead_submit failed (kathy)', e);
  }
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
      const formId = (typeof payloadObj.formId === 'string' ? payloadObj.formId : null);
      const formName = (typeof payloadObj.formName === 'string' ? payloadObj.formName : null);
      const submissionId =
        (typeof payloadObj.submissionId === 'string' ? payloadObj.submissionId : null) ??
        (typeof payloadObj.id === 'string' ? payloadObj.id : null);

      if (isDuplicate(submissionId)) {
        try { console.log('[Tally] duplicate (iframe) ignored', submissionId); } catch {}
        return;
      }

      pushDataLayer({ formId, formName, submissionId, source: 'tally_iframe' });

      trackPosthogLead({
        formId: formId ?? undefined,
        formName: formName ?? undefined,
        submissionId: submissionId ?? undefined,
        source: 'tally_iframe',
      });

      const w = window as WindowWithDataLayerAndGtag;
      if (typeof w.gtag === 'function' && w.__tallyDebug) {
        try {
          w.gtag('event', 'generate_lead', {
            method: 'tally_iframe',
            form_id: formId ?? undefined,
            form_name: formName ?? undefined,
          });
        } catch { /* no-op */ }
      }

      fireGoogleAdsLeadConversion();

      try {
        console.log('[Tally] pushed tally_form_submitted (iframe)', { formId, formName, submissionId });
      } catch {}
    };

    const onCustomEvent = (ev: Event) => {
      const detail = (ev as CustomEvent).detail || {};
      const formId = detail?.formId ?? null;
      const formName = detail?.formName ?? null;
      const submissionId = detail?.submissionId ?? null;

      if (isDuplicate(submissionId)) {
        try { console.log('[Tally] duplicate (dom) ignored', submissionId); } catch {}
        return;
      }

      pushDataLayer({ formId, formName, submissionId, source: 'tally_dom' });

      trackPosthogLead({
        formId: formId ?? undefined,
        formName: formName ?? undefined,
        submissionId: submissionId ?? undefined,
        source: 'tally_dom',
      });

      const w = window as WindowWithDataLayerAndGtag;
      if (typeof w.gtag === 'function' && w.__tallyDebug) {
        try {
          w.gtag('event', 'generate_lead', {
            method: 'tally_dom',
            form_id: formId ?? undefined,
            form_name: formName ?? undefined,
          });
        } catch { /* no-op */ }
      }

      fireGoogleAdsLeadConversion();

      try {
        console.log('[Tally] pushed tally_form_submitted (dom)', { formId, formName, submissionId });
      } catch {}
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
