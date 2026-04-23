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

  return {
    trackWhatsAppClick,
    trackWhatsAppClickAdvanced,
  };
};

export default useAnalytics;
