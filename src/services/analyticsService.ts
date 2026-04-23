/**
 * Serviço centralizado de Analytics - Implementação com padrão SOLID
 * 
 * Princípios aplicados:
 * - Single Responsibility: Apenas gerencia eventos de analytics
 * - Open/Closed: Aberto para extensão, fechado para modificação
 * - Dependency Inversion: Dependências injetáveis
 */

/**
 * Interface para evento de analytics
 * Padroniza a estrutura de todos os eventos
 */
export interface AnalyticsEvent {
  eventName: string;
  category: string;
  label: string;
  source?: string;
  value?: number;
  customParams?: Record<string, unknown>;
}

/**
 * Parâmetros específicos para eventos de WhatsApp
 */
export interface WhatsAppClickParams {
  source: 'header' | 'footer' | 'form' | 'procedure-page' | 'floating-button' | 'index' | string;
  procedureName?: string;
  label?: string;
}

/**
 * Interface de serviço (abstração para suportar múltiplos provedores no futuro)
 */
export interface IAnalyticsService {
  trackWhatsAppClick(params: WhatsAppClickParams): void;
  trackEvent(event: AnalyticsEvent): void;
  trackConversion(whatsappUrl: string): void;
}

/**
 * Declaração global para typar o gtag disponível no window
 */
declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: { page_path?: string }): void;
      (
        command: 'event',
        action: string,
        params: {
          event_category?: string;
          event_label?: string;
          event_source?: string;
          procedure_name?: string;
          page_path?: string;
          value?: number;
          send_to?: string;
          event_callback?: () => void;
          [key: string]: unknown;
        },
      ): void;
    };
  }
}

/**
 * Implementação do serviço de Google Analytics
 * 
 * Responsabilidades:
 * - Verificar disponibilidade do gtag
 * - Disparar eventos com estrutura consistente
 * - Manter separação entre tracking e lógica de negócio
 */
class GoogleAnalyticsService implements IAnalyticsService {
  private readonly GA_ID = 'G-926CE4V53N';
  private readonly ADS_CONVERSION_ID = 'AW-17354756555/Zd1wCK78jocbEMujstNA';

  /**
   * Verifica se gtag está disponível no window
   */
  private isAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  /**
   * Rastreia cliques em botões WhatsApp com contexto padronizado
   * 
   * @param params Configuração do evento
   * @example
   * trackWhatsAppClick({
   *   source: 'header',
   *   procedureName: 'otomodelacao'
   * })
   */
  trackWhatsAppClick(params: WhatsAppClickParams): void {
    if (!this.isAvailable()) {
      console.warn('Google Analytics não está disponível');
      return;
    }

    const eventLabel = 
      params.label || 
      `whatsapp_click_${params.source}` + 
      (params.procedureName ? `_${params.procedureName}` : '');

    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: eventLabel,
      event_source: params.source,
      procedure_name: params.procedureName || undefined,
      page_path: window.location.pathname,
      value: 1,
    });
  }

  /**
   * Dispara eventos de analytics genéricos
   * 
   * @param event Configuração do evento
   * @example
   * trackEvent({
   *   eventName: 'form_submission',
   *   category: 'engagement',
   *   label: 'contact_form',
   *   source: 'form',
   *   value: 1
   * })
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isAvailable()) {
      console.warn('Google Analytics não está disponível');
      return;
    }

    window.gtag('event', event.eventName, {
      event_category: event.category,
      event_label: event.label,
      event_source: event.source,
      value: event.value,
      page_path: window.location.pathname,
      ...event.customParams,
    });
  }

  /**
   * Rastreia conversão e abre link do WhatsApp
   * Integrado com Google Ads
   * 
   * @param whatsappUrl URL para abrir no WhatsApp
   * @example
   * trackConversion('https://wa.me/5511942242893?text=...')
   */
  trackConversion(whatsappUrl: string): void {
    const callback = () => window.open(whatsappUrl, '_blank');

    if (this.isAvailable()) {
      window.gtag('event', 'conversion', {
        send_to: this.ADS_CONVERSION_ID,
        event_callback: callback,
      });
    } else {
      console.warn('Google Ads conversion não foi rastreada');
      callback();
    }
  }
}

// Adicione este método dentro da classe GoogleAnalyticsService em src/services/analyticsService.ts

trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.eventName, {
      event_category: event.category,
      event_label: event.label,
      event_source: event.source,
      ...event.customParams,
    });
  }
  
  // Também envia para o dataLayer para o GTM capturar
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: event.eventName,
      category: event.category,
      label: event.label,
      source: event.source
    });
  }
}

/**
 * Singleton - instância única do serviço
 */
export const analyticsService = new GoogleAnalyticsService();

export default analyticsService;
