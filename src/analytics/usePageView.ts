import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      window.gtag('config', 'AW-17354756555', {
        page_path: url,
        page_title: document.title,
      });

      // Evento específico de visualização enviado no arquivo txt
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17354756555/_Ud5CI6WrJAcEMujstNA'
      });
    }
  }, [location]);
}