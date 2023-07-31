import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Quedarse en el Asistente
 * El Usuario visualizara esta vista al terminar la ejecución de una acción correcta
 * El flujo finaliza con endFlow
 */
export const flujoQuedarse = addKeyword(['Quedarse'])
.addAction((ctx, {endFlow}) => endFlow(`
Por favor envie el mensaje *Menu Principal* para volver al *Menu* 🗄️ o envie el mensaje *Adios* para finalizar el asistente 🤖.
`))
