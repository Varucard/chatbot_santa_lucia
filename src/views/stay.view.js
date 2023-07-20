import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Quedarse en el Asistente
 */
export const flujoQuedarse = addKeyword(['Quedarse'])
.addAnswer('Por favor digite y envie el mensaje *Menu Principal* para volver al menu 🗄️ o digite y envie el mensaje *Adios* para finalizar el asistente 🤖.')
