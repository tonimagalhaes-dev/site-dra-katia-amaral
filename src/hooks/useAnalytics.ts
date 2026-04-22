/**
 * Hook customizado para usar Analytics nos componentes
 * 
 * Objetivo: Simplificar a integração de tracking nos componentes React
 * mantendo a separação de responsabilidades
 */

import { useCallback } from 'react';
import { analyticsService, WhatsAppClickParams } from '@/services/analyticsService';

/**
 * Hook para usar analytics de forma simplificada e typada
 * 
 * @example
 * const { trackWhatsAppClick } = useAnalytics();
 * 
 * const handleClick = () => {
 *   trackWhatsAppClick('header');
 * };
 */
export const useAnalytics = () => {
  /**
   * Rastreia clique em WhatsApp de forma memoizada
   */
  const trackWhatsAppClick = useCallback(
    (source: string, procedureName?: string) => {
      analyticsService.trackWhatsAppClick({
        source,
        procedureName,
      });
    },
    []
  );

  /**
   * Rastreia cliques em WhatsApp com parâmetros completos
   */
  const trackWhatsAppClickAdvanced = useCallback(
    (params: WhatsAppClickParams) => {
      analyticsService.trackWhatsAppClick(params);
    },
    []
  );

  /**
   * Rastreia conversão de WhatsApp (integrado com Google Ads)
   */
  const trackWhatsAppConversion = useCallback(
    (whatsappUrl: string) => {
      analyticsService.trackConversion(whatsappUrl);
    },
    []
  );

  return {
    trackWhatsAppClick,
    trackWhatsAppClickAdvanced,
    trackWhatsAppConversion,
  };
};

export default useAnalytics;
