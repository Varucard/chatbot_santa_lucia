import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Listado de palabras que el Bot acepta
let listado = [
  '¡Hola! Quisiera recibir información de la institución',
  'informacion',
  'Información',
  'información',
  'hola',
  'Hola',
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

¡Hola! Estamos felices de poder darte la bienvenida al *ChatBot* de nuestra Institución. 🙂
Si desea obtener mas información de nosotros por favor comunicate a través de nuestra web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*

O envianos un mensaje a nuestra casilla de correo para responderte a la brevedad 📧 *admisantalucia@gmail.com*
Estamos para ayudarte a resolver la consulta que tengas. 🙂
`,
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
En caso de ya encontrarse inscripto en la Institución, o no ser la primera vez que utiliza nuestro servicio por favor digite y envie el mensaje *Chatbot* para iniciar el sistema. 🤖
`),
  );
