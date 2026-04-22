import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      const currentPath = location.pathname + location.search;

      // 1. Registra a visualização na tag base do Google Ads
      window.gtag('config', 'AW-17354756555', {
        page_path: currentPath,
        page_title: document.title,
      });

      // 2. Dispara o evento específico de conversão "Visualização de página" (exigência do Gestor)
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17354756555/_Ud5CI6WrJAcEMujstNA'
      });
    }
  }, [location]);
}