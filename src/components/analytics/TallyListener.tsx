'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js'
import { ANALYTICS_BRAND, ANALYTICS_LOCATION } from "@/lib/analytics";

const TALLY_ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?tally\.so$/i;
// Google Ads conversion tracking
// Account/Tag: AW-17742166397
// Conversion name: Enviar formulario de clientes potenciales
// Trigger: Tally lead form submission
const GOOGLE_ADS_LEAD_SEND_TO = 'AW-17742166397/RTkrCP3v8cMbEP3yj4xC';

function safeParse<T = any>(v: any): T | null {
  if (typeof v !== 'string') return (v ?? null) as T | null;
  try { return JSON.parse(v) as T; } catch { return null; }
}

function isDuplicate(params: {
  submissionId?: string | null;
  formId?: string | null;
  source: 'tally_iframe' | 'tally_dom';
}): boolean {
  const { submissionId, formId, source } = params;
  try {
    if (submissionId) {
      const key = `tally_submit_${submissionId}`;
      if (sessionStorage.getItem(key)) return true;
      sessionStorage.setItem(key, '1');
      return false;
    }

    const fallbackKey = `tally_submit_fallback_${source}_${formId ?? 'unknown'}`;
    const now = Date.now();
    const last = Number(sessionStorage.getItem(fallbackKey) ?? '0');
    if (Number.isFinite(last) && now - last < 10_000) return true;
    sessionStorage.setItem(fallbackKey, String(now));
  } catch { /* ignore */ }
  return false;
}

function isAdsDebugEnabled(): boolean {
  try {
    if (typeof window === 'undefined') return false;
    if ((window as any).__kcDebugAds === true) return true;
    return localStorage.getItem('kcDebugAds') === '1';
  } catch {
    return false;
  }
}

function logAdsDebug(payload: any) {
  if (!isAdsDebugEnabled()) return;
  try {
    console.info(payload.message, payload.data);
  } catch { /* no-op */ }
}

function logTallySubmit(params: {
  source: 'tally_iframe' | 'tally_dom';
  formId?: string | null;
  submissionId?: string | null;
  deduped: boolean;
  conversionFired: boolean;
}) {
  if (!isAdsDebugEnabled()) return;
  try {
    console.info('kc tally submit', {
      formId: params.formId ?? undefined,
      submissionId: params.submissionId ?? undefined,
      deduped: params.deduped,
      conversionFired: params.conversionFired,
      source: params.source,
    });
  } catch { /* no-op */ }
}

function fireGoogleAdsLeadConversion(): boolean {
  if (typeof (window as any).gtag !== 'function') return false;
  try {
    if (!(window as any).__kcAdsConfigured) {
      // When GTM loads the Google tag, gtag is available. We only add the new Ads config ID here.
      (window as any).gtag('config', 'AW-17742166397');
      (window as any).__kcAdsConfigured = true;
    }
    (window as any).gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_LEAD_SEND_TO,
      value: 1.0,
      currency: 'USD',
    });
    return true;
  } catch { /* no-op */ }

  return false;
}

function pushDataLayer(payload: {
  formId?: string | null;
  formName?: string | null;
  submissionId?: string | null;
  source: 'tally_iframe' | 'tally_dom';
}) {
  if (!Array.isArray((window as any).dataLayer)) (window as any).dataLayer = [];
  (window as any).dataLayer.push({
    event: 'tally_form_submitted',
    formId: payload.formId ?? undefined,
    formName: payload.formName ?? undefined,
    submissionId: payload.submissionId ?? undefined,
    source: payload.source,
  });
}

function trackPosthogLead({
  formId,
  formName,
  submissionId,
  source,
}: {
  formId?: string
  formName?: string
  submissionId?: string
  source: 'tally_iframe' | 'tally_dom'
}) {
  try {
    if (!posthog) return

    posthog.capture('lead_submit', {
      brand: ANALYTICS_BRAND,
      location: ANALYTICS_LOCATION,
      formId,
      formName,
      submissionId,
      source,
      path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    })
  } catch (e) {
    // fail silently – analytics should never break the app
    console.error('PostHog lead_submit failed', e)
  }
}

export default function TallyListener() {
  useEffect(() => {
    logAdsDebug({
      message: 'kc ads debug',
      data: {
        gtag: typeof (window as any).gtag,
        dataLayer: Array.isArray((window as any).dataLayer) ? 'array' : typeof (window as any).dataLayer,
      },
    });

    const onMessage = (e: MessageEvent) => {
      if (!e.origin || !TALLY_ORIGIN_RE.test(e.origin)) return;

      const parsed = safeParse<any>(e.data);
      const isSubmitted =
        parsed?.event === 'Tally.FormSubmitted' ||
        parsed?.type === 'FORM_SUBMITTED';
      if (!isSubmitted) return;

      const p = parsed?.payload || {};
      const formId = p?.formId ?? null;
      const formName = p?.formName ?? null;
      const submissionId = p?.submissionId ?? p?.id ?? null;

      const deduped = isDuplicate({ submissionId, formId, source: 'tally_iframe' });
      if (deduped) {
        logTallySubmit({
          source: 'tally_iframe',
          formId,
          submissionId,
          deduped: true,
          conversionFired: false,
        });
        return;
      }

      pushDataLayer({ formId, formName, submissionId, source: 'tally_iframe' });

      trackPosthogLead({
        formId: formId ?? undefined,
        formName: formName ?? undefined,
        submissionId: submissionId ?? undefined,
        source: 'tally_iframe',
      })

      if (typeof (window as any).gtag === 'function') {
        try {
          // Optional GA4 (generate_lead)
          if ((window as any).__tallyDebug) (window as any).gtag('event', 'generate_lead', {
            method: 'tally_iframe',
            form_id: formId ?? undefined,
            form_name: formName ?? undefined,
          });
        } catch { /* no-op */ }
      }

      const conversionFired = fireGoogleAdsLeadConversion();

      logTallySubmit({
        source: 'tally_iframe',
        formId,
        submissionId,
        deduped: false,
        conversionFired,
      });
    };

    const onCustomEvent = (ev: Event) => {
      const detail = (ev as CustomEvent).detail || {};
      const formId = detail?.formId ?? null;
      const formName = detail?.formName ?? null;
      const submissionId = detail?.submissionId ?? null;

      const deduped = isDuplicate({ submissionId, formId, source: 'tally_dom' });
      if (deduped) {
        logTallySubmit({
          source: 'tally_dom',
          formId,
          submissionId,
          deduped: true,
          conversionFired: false,
        });
        return;
      }

      pushDataLayer({ formId, formName, submissionId, source: 'tally_dom' });

      trackPosthogLead({
        formId: formId ?? undefined,
        formName: formName ?? undefined,
        submissionId: submissionId ?? undefined,
        source: 'tally_dom',
      })

      if (typeof (window as any).gtag === 'function') {
        try {
          (window as any).gtag('event', 'generate_lead', {
            method: 'tally_dom',
            form_id: formId ?? undefined,
            form_name: formName ?? undefined,
          });
        } catch { /* no-op */ }
      }

      const conversionFired = fireGoogleAdsLeadConversion();

      logTallySubmit({
        source: 'tally_dom',
        formId,
        submissionId,
        deduped: false,
        conversionFired,
      });
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
