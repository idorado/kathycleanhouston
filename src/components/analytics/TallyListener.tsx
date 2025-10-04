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
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'quote_request_submitted',
          source: 'tally',
          // agrega lo que venga del payload por si lo quieres usar en GTM
          ...data?.payload,
        });

        // (OPCIONAL) disparo directo de Google Ads además del de GTM:
        // (window as any).gtag?.('event', 'conversion', {
        //   send_to: 'AW-17062489970/XHAECLjasMkaEPLeg8g_',
        // });
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return null;
}
