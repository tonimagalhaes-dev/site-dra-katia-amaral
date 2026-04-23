export const GOOGLE_ADS_ID = 'AW-17354756555';
export const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-17354756555/Zd1wCK78jocbEMujstNA'; // Rótulo antigo mantido para botões caso não usem GTM

const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

export const pageview = (url: string) => {
  if (isGtagAvailable()) {
    window.gtag('config', GOOGLE_ADS_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
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

export const reportWhatsappConversion = (whatsappUrl: string) => {
  const callback = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (isGtagAvailable()) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
      event_callback: callback,
    });
  } else {
    callback();
  }
};