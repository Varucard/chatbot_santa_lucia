import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Listado de palabras que el Bot acepta
let listadoAdios = ['Adios', 'Adiós', 'adios', 'Finalizar', 'finalizar', 'Gracias. Adiós'];

/**
 * Flujo Adios
 * El Usuario visualizara esta vista cuando el finalice la utilización del Bot
 * El Flujo finaliza con endFlow
 */
export const flujoAdios = addKeyword(listadoAdios).addAction((ctx, { endFlow }) =>
  endFlow(`
Gracias por utilizar nuestro nuevo asistente virtual 🤖.
Para futuras consultas por favor digite y envie el mensaje *ChatBot* para recibir nuestra asistencia nuevamente.
Tambien puede comunicarse con nostros a *admisantalucia@gmail.com* 💬 o a traves de nuestra web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*

Que tenga buen día ¡Adios! 👋🏽
`),
);
