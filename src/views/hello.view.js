import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js';

// Listado de palabras que el Bot acepta
let listadoHola = [
  'Buenas tardes',
  'buenas tardes',
  'Buenos días',
  'Buenos dias',
  'buenos dias',
  'Buen día',
  'Buen dia',
  'buen dia',
  'buen día',
  'Reiniciar',
  'reiniciar',
  'ChatBot',
  'chatbot',
  'Chatbot',
  'chatbol',
  'Chatbol',
  'Chat bot',
  'Chat Bot',
  'chat bot',
  'chabot',
  'Chabot',
  'Rite',
  'rite',
  'Chatbox',
  'chatbox',
  'Hoka',
  'hoka',
  'Chatboy',
  'ChatBoy',
  'chatboy',
  'Chatbort',
  'chatbort',
  'Chatbo',
  'chatbo',
  'chabo',
];

/**
 * Flujo de bienvenida.
 * Mensaje de bienvenida que visualiza el Usuario por primera vez
 * Te envia a Flujo Validador de Tutores
 */
export const flujoHola = addKeyword(listadoHola)
  .addAnswer(
    `
*Colegio Santa Lucia* 🏫

¡Hola! Estamos felices de poder darte la bienvenida a nuestro Asistente Virtual Institucional. 🤖
Estamos para ayudarte a resolver las consultas o inconvenientes que tengas. 🙂
Nuestros horarios de atención son los días hábiles de 08:00hs a 15:00hs ⏰.
*Únicamente recibimos mensajes de texto 💬 (por favor, no enviar audios 🎤, realizar llamadas 📞, y tampoco enviar fotos 📷)*
`,
  )
  .addAction((ctx, { gotoFlow }) => gotoFlow(barrel.barrelValidadores.flujoValidadorTutores));
