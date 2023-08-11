import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Tutor desconocido
 * El Tutor visualizara este flujo al momento de no ser reconocido por el validador de DNI
 * El Flujo finaliza con endFlow
 */
export const flujoTutorDesconocido = addKeyword(['DNI Desconocido Tutor'])
.addAnswer('Validando los datos, por favor aguarde unos instantes... ⏰')
.addAnswer(`
Lamentamos informale que no pudimos encontrarlo en nuestros archivos 😔.
Por favor envie un mensaje 💬 para poder brindarle soporte ante este inconveniente.
*soporte@gmail.com* 📧
`, {delay: 2000})
.addAction((ctx, {endFlow}) => endFlow(`
En caso de equivocación al ingresar el Nro. de Documento, por favor envie el mensaje *Reiniciar* para volver a iniciar el asistente. 🤖
`))
