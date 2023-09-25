import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js';

// Listado de palabras que el Bot acepta
let listado = [
  'Hola, quisiera recibir información de la institución',
  'informacion',
  'Información',
  'información',
];

/**
 * Flujo de Nuevo usuario.
 * Mensaje de bienvenida que visualiza el Usuario al ingresar por la pagina o al solicitar "Información"
 * El Flujo finaliza con endFlow
 */
export const flujoNuevoUsuario = addKeyword(listado)
  .addAnswer(
    `
*Colegio Santa Lucia* 🏫

¡Hola! Estamos felices de poder darte la bienvenida a nuestro Institución. 🙂
Para obtener mas información por favor comunicate con nosotros a través de nuestra web 🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*
O envianos un mensaje a nuestra casilla de correo para responderte a la brevedad 📧 *admisantalucia@gmail.com*
Estamos para ayudarte a resolver la consulta que tengas. 🙂
`,
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
En caso de ya encontrarse inscripto en la Institución, por favor digite y envie el mensaje *Chatbot* para iniciar el sistema. 🤖
`),
  );
