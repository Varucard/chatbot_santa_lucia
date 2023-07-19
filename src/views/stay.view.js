import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Quedarse en el Asistente
 */
export const flujoQuedarse = addKeyword(['Quedarse'])
.addAnswer('Por favor digite la palabra *Menu Principal* para volver a visualizar todas las opciones o digite *Adios* para finalizar el asistente')
