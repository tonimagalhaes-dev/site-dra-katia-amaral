
// Constantes globais do projeto
export const WHATSAPP_NUMBER = '5511914477057';

// URL base do WhatsApp
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Função utilitária para criar links do WhatsApp com mensagem
export const createWhatsAppUrl = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};
