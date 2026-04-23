/**
 * Serviço centralizado de Analytics
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

declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: { page_path?: string; page_title?: string }): void;
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
    dataLayer: any[];
  }
}

class GoogleAnalyticsService implements IAnalyticsService {
  // O Rótulo abaixo é do gestor antigo (Zd1w...). Mantive vinculado à nova conta (AW-1735...)
  // Caso o gestor rastreie tudo via GTM, isso servirá apenas como fallback.
  private readonly ADS_CONVERSION_ID = 'AW-17354756555/Zd1wCK78jocbEMujstNA';

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
    const callback = () => window.open(whatsappUrl, '_blank');

    if (this.isAvailable()) {
      window.gtag('event', 'conversion', {
        send_to: this.ADS_CONVERSION_ID,
        event_callback: callback,
      });
    } else {
      callback();
    }
  }
}

/**
 * Singleton - instância única do serviço
 */
export const analyticsService = new GoogleAnalyticsService();
export default analyticsService;