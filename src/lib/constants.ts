
// Constantes globais do projeto
export const WHATSAPP_NUMBER = '5511942242893';

// URL base do WhatsApp
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const OTOMODELACAO_WHATSAPP_MESSAGE =
  'Olá, Dra. Kátia! Vi a página de otomodelação e gostaria de saber mais sobre uma avaliação.';

// Função utilitária para criar links do WhatsApp com mensagem
export const createWhatsAppUrl = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};
