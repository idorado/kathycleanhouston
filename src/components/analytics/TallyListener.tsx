'use client';
import { useEffect } from 'react';

export default function TallyListener() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      // Tally envía postMessage desde el iframe
      const data = e.data as any;
      if (!data || typeof data !== 'object') return;

      // Cobertura de formatos comunes
      const evt = data?.event || data?.tally?.event;
      if (evt === 'Tally.FormSubmitted' || evt === 'FORM_SUBMITTED') {
        const payload = data?.payload || {};
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'quote_request_submitted',
            source: 'tally',
            formId: payload?.formId || null,
            formName: payload?.formName || null,
          });
          // útil para depuración
          // eslint-disable-next-line no-console
          console.log('[TallyListener] Event pushed: quote_request_submitted');
        }

        // (OPCIONAL) disparo directo de Google Ads además del de GTM:
        // (window as any).gtag?.('event', 'conversion', {
        //   send_to: 'AW-17062489970/XHAECLjasMkaEPLeg8g_',
        // });
      }
    };

    // Listener para postMessage desde iframe
    window.addEventListener('message', handler);

    // Listener para el CustomEvent emitido por Tally en la página padre
    const domListener = (event: Event) => {
      const custom = event as CustomEvent<any>;
      const detail = custom.detail || {};
      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'quote_request_submitted',
          source: 'tally',
          formId: detail?.formId || null,
          formName: detail?.formName || null,
        });
        // eslint-disable-next-line no-console
        console.log('[TallyListener] Event pushed: quote_request_submitted');
      }
    };
    document.addEventListener('tally:form-submitted', domListener as EventListener);

    return () => {
      window.removeEventListener('message', handler);
      document.removeEventListener('tally:form-submitted', domListener as EventListener);
    };
  }, []);

  return null;
}
