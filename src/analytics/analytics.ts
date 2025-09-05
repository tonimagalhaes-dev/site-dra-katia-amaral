// Define tipos mais específicos para a função gtag, melhorando a segurança.
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
          value?: number;
          send_to?: string;
          event_callback?: () => void;
        },
      ): void;
    };
  }
}
export const GA_TRACKING_ID = 'G-926CE4V53N';
// IMPORTANTE: Substitua pelo seu ID de conversão e rótulo do Google Ads.
export const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-17354756555';

// Verifica se o gtag está disponível
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Função para inicializar o GA
export const pageview = (url: string) => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Função para eventos personalizados do Google Analytics
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (isGtagAvailable()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Dispara um evento de conversão para o Google Ads e, em seguida,
 * redireciona o usuário para a URL do WhatsApp.
 * @param whatsappUrl A URL de destino do WhatsApp.
 */
export const reportWhatsappConversion = (whatsappUrl: string) => {
  const callback = () => {
  // Abre o link em uma nova aba, mantendo o comportamento original
  window.open(whatsappUrl, '_blank');
  };

  if (isGtagAvailable()) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
      event_callback: callback,
    });
  } else {
    console.error(
      'Função gtag não encontrada. Verifique se o script do Google Ads foi carregado.',
    );
    // Se o gtag não for encontrado, apenas redireciona o usuário.
    callback();
  }
};