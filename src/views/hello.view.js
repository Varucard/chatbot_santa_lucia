import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js';

// Listado de palabras que el Bot acepta
let listado = [
  'hola',
  'Hola',
  'Buenos días',
  'Buenos dias',
  'buenos dias',
  'Reiniciar',
  'reiniciar',
  'ChatBot',
  'chatbot',
  'Chatbot',
];

/**
 * Flujo de bienvenida.
 * Mensaje de bienvenida que visualiza el Usuario por primera vez
 * Te envia a Validador de Tutores
 */
export const flujoHola = addKeyword(listado)
  .addAnswer(
    `
*Colegio Santa Lucia* 🏫

¡Hola! Estamos felices de poder darte la bienvenida a nuestro chat Institucional. 🤖
Estamos para ayudarte a resolver la consulta o inconveniente que tengas. 🙂
Nuestros horarios de atención son los días hábiles de 08:00hs a 15:00hs ⏰.
*Únicamente recibimos mensajes de texto 💬 (por favor, no enviar audios 🎤, ni fotos 📷)*
`,
  )
  .addAction((ctx, { gotoFlow }) => gotoFlow(barrel.barrelValidadores.flujoValidadorTutores));
