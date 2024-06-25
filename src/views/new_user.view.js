import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Listado de palabras que el Bot acepta
let listadoUsuarioNuevo = [
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
export const flujoNuevoUsuario = addKeyword(listadoUsuarioNuevo)
  .addAnswer(
    `
*Colegio Santa Lucia* 🏫

¡Hola! Estamos felices de poder darte la bienvenida a nuestro Asistente Virtual Institucional 🤖.
Si desea obtener mas información de nosotros por favor comunicate a través de nuestra web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*

O envianos un mensaje a nuestra casilla de correo para responderte a la brevedad 📧 *admisantalucia@gmail.com*
Estamos para ayudarte a resolver la consulta que tengas. 🙂
`,
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
Si desea seguir con nuestro Asistente Virtual, por favor envie el mensaje *Chatbot* para continuar 🤖.
`),
  );
