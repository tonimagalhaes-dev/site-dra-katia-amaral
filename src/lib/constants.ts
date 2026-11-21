export const WHATSAPP_NUMBER = '5511942242893';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const procedureByPath: Record<string, string> = {
  '/otomodelacao': 'Otomodelação',
  '/harmonizacao-facial': 'Harmonização Facial',
  '/harmonizacao-corporal': 'Harmonização Corporal',
  '/lobuloplastia': 'Lobuloplastia',
  '/pacotes-de-harmonizacao': 'Pacotes de Harmonização Facial',
  '/bioestimulador-de-colageno': 'Bioestimulador de Colágeno',
  '/mesoterapia-emptiers': 'Mesoterapia',
  '/escleroterapia': 'Escleroterapia',
  '/harmonizacao-glutea': 'Harmonização Glútea',
  '/jato-de-plasma': 'Jato de Plasma',
  '/micropigmentacao': 'Micropigmentação',
  '/ozonioterapia': 'Ozonioterapia',
  '/preenchimento-labial': 'Preenchimento Labial',
  '/skinbooster': 'Skinbooster',
  '/terapia-capilar': 'Terapia Capilar',
};

export function getProcedureForPath(pathname: string) {
  return procedureByPath[pathname.toLowerCase().replace(/\/+$/, '')];
}

export function appointmentMessage(procedure?: string) {
  return procedure
    ? `Olá! Vi no site e gostaria de saber mais sobre ${procedure} e agendar uma avaliação.`
    : 'Olá! Gostaria de saber mais sobre procedimento estético e agendar uma avaliação.';
}

export function createWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
