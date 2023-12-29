import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Quedarse en el Asistente
 * El Usuario visualizara esta vista al terminar la ejecución de una acción correcta
 * El flujo finaliza con endFlow
 */
export const flujoQuedarse = addKeyword(['Quedarse']).addAction((ctx, { endFlow }) =>
  endFlow(`
Por favor digite y envie el mensaje *Menú Principal* 🗄️ para volver a este o envie el mensaje *Adiós* para finalizar el asistente 🤖.
`),
);
