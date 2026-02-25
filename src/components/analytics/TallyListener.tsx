'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js'
import { ANALYTICS_BRAND, ANALYTICS_LOCATION } from "@/lib/analytics";

const TALLY_ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?tally\.so$/i;

function safeParse<T = any>(v: any): T | null {
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
      })

      if (typeof (window as any).gtag === 'function') {
        try {
          // Optional GA4 (generate_lead)
          if ((window as any).__tallyDebug) (window as any).gtag('event', 'generate_lead', {
            method: 'tally_iframe',
            form_id: formId ?? undefined,
            form_name: formName ?? undefined,
          });
          // Optional Google Ads conversion (direct)
          if ((window as any).__tallyDebug) (window as any).gtag('event', 'conversion', {
            send_to: 'AW-17062489970/XHAECLjasMkaEPLeg8g_',
          });
        } catch { /* no-op */ }
      }

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
      })

      if (typeof (window as any).gtag === 'function') {
        try {
          (window as any).gtag('event', 'generate_lead', {
            method: 'tally_dom',
            form_id: formId ?? undefined,
            form_name: formName ?? undefined,
          });
          if ((window as any).__tallyDebug) (window as any).gtag('event', 'conversion', {
            send_to: 'AW-17062489970/XHAECLjasMkaEPLeg8g_',
          });
        } catch { /* no-op */ }
      }

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
