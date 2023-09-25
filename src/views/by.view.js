import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Adios
 * El Usuario visualizara esta vista cuando el finalice la utilización del Bot
 * El Flujo finaliza con endFlow
 */
export const flujoAdios = addKeyword(['Adios']).addAction((ctx, { endFlow }) =>
  endFlow(`
Gracias por utilizar nuestro nuevo asistente virtual 🤖. Para futuras consultas por favor digite y envie el mensaje *Hola* para recibir nuestra asistencia nuevamente.

Que tenga buen día ¡Adios! 👋🏽
`),
);
