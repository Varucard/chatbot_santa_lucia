import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flujoAdios = addKeyword(['gracias']).addAnswer('Hasta luego');

