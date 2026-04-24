import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GTM_ID = 'GTM-W9J8QQDS';

declare global {
  interface Window {
    dataLayer: Array<{
      event: string;
      [key: string]: unknown;
    }>;
  }
}

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname + location.search;

    // 1. Notifica o GTM sobre a mudança de página (Standard para SPAs)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'virtual_pageview',
        page_path: url,
        page_title: document.title,
      });
    }

    // 2. Notifica o Google Ads conforme solicitado pelo gestor
    if (window.gtag) {
      // Configuração base
      window.gtag('config', GTM_ID, {
        page_path: url,
        page_title: document.title,
      });

      // Evento específico de visualização enviado no arquivo txt
      window.gtag('event', 'conversion', {
        'send_to': GTM_ID,
      });
    }
  }, [location]);
}