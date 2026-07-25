/**
 * Compatibilidade de analytics para as páginas institucionais.
 *
 * A landing de campanha usa a camada tipada em `src/analytics/analytics.ts`.
 * Este serviço mantém os consumidores institucionais antigos sem reintroduzir GTM.
 */

export interface AnalyticsEvent {
  eventName: string;
  category: string;
  label: string;
  source?: string;
  value?: number;
  customParams?: Record<string, unknown>;
}

export interface WhatsAppClickParams {
  source: 'header' | 'footer' | 'form' | 'procedure-page' | 'floating-button' | 'index' | string;
  procedureName?: string;
  label?: string;
}

export interface IAnalyticsService {
  trackWhatsAppClick(params: WhatsAppClickParams): void;
  trackEvent(event: AnalyticsEvent): void;
  trackConversion(whatsappUrl: string): void;
}

class GoogleAnalyticsService implements IAnalyticsService {
  private isAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  trackWhatsAppClick(params: WhatsAppClickParams): void {
    if (!this.isAvailable()) return;

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

  trackEvent(event: AnalyticsEvent): void {
    if (!this.isAvailable()) return;

    window.gtag('event', event.eventName, {
      event_category: event.category,
      event_label: event.label,
      event_source: event.source,
      value: event.value,
      page_path: window.location.pathname,
      ...event.customParams,
    });
  }

  trackConversion(whatsappUrl: string): void {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Singleton - instância única do serviço
 */
export const analyticsService = new GoogleAnalyticsService();
export default analyticsService;
