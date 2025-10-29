'use client';
import { useEffect } from 'react';

export default function TallyListener() {
  useEffect(() => {
    const postMessageHandler = (e: MessageEvent) => {
      const data = e.data as any;
      if (!data || typeof data !== 'object') return;

      // Dos formatos esperados desde Tally
      const isSubmitted = data?.event === 'Tally.FormSubmitted' || data?.type === 'FORM_SUBMITTED';
      if (!isSubmitted) return;

      const payload = data?.payload || {};
      const formId = payload?.formId ?? null;
      const formName = payload?.formName ?? null;

      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'quote_request_submitted',
          source: 'tally',
          formId,
          formName,
        });
        // Logs de depuración
        // eslint-disable-next-line no-console
        console.debug('[TallyListener] Event pushed: quote_request_submitted');
        if ((window as any).__tallyDebug) {
          // eslint-disable-next-line no-console
          console.debug('[TallyListener] postMessage payload:', payload);
        }
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', { send_to: 'AW-17062489970/XHAECLjasMkaEPLeg8g_' });
        }
      }
    };

    const customEventHandler = (event: Event) => {
      const custom = event as CustomEvent<any>;
      const detail = custom.detail || {};
      const formId = detail?.formId ?? null;
      const formName = detail?.formName ?? null;

      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'quote_request_submitted',
          source: 'tally',
          formId,
          formName,
        });
        // eslint-disable-next-line no-console
        console.debug('[TallyListener] Event pushed: quote_request_submitted');
        if ((window as any).__tallyDebug) {
          // eslint-disable-next-line no-console
          console.debug('[TallyListener] customEvent detail:', detail);
        }
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', { send_to: 'AW-17062489970/XHAECLjasMkaEPLeg8g_' });
        }
      }
    };

    // Montar listeners
    window.addEventListener('message', postMessageHandler);
    document.addEventListener('tally:form-submitted', customEventHandler as EventListener);

    // Limpieza
    return () => {
      window.removeEventListener('message', postMessageHandler);
      document.removeEventListener('tally:form-submitted', customEventHandler as EventListener);
    };
  }, []);

  return null;
}
