import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Usuario desconocido
 * El Usuario visualizara este flujo al momento de no ser reconocido por el validador de DNI
 */
export const flujoUsuarioDeconocido = addKeyword(['DNI desconocido'])
.addAnswer('Validando los datos, por favor aguarde unos instantes... ⏰')
.addAnswer(`
Lamentamos informale que no pudimos encontrarlo en nuestros archivos 😔.
Por favor envie un mensaje 💬 para poder brindarle soporte ante este inconveniente.
*soporte@gmail.com* 📧
`, {delay: 2000})
.addAnswer(`
En caso de equivocación al ingresar el Nro. de Documento, por favor envie el mensaje *Reiniciar* para volver a iniciar el asistente. 🤖
`)
