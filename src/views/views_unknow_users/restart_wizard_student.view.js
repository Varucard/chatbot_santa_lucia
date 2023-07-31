import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Alumno desconocido
 * El Tutor visualizara este flujo al momento de no ser reconocido el estudiante por el validador de DNI
 * El Flujo finaliza con endFlow
 */
export const flujoAlumnoDesconocido = addKeyword(['DNI Desconocido Alumno'])
.addAnswer('Validando los datos, por favor aguarde unos instantes... ⏰')
.addAnswer(`
Lamentamos informale que no pudimos encontrar al Alumno en nuestros archivos 😔.
Por favor envie un mensaje 💬 para poder brindarle soporte ante este inconveniente.
*soporte@gmail.com* 📧
`, {delay: 2000})
.addAction((ctx, {endFlow}) => endFlow(`
En caso de equivocación al ingresar el Nro. de Documento, por favor envia el mensaje *Menu Principal* para volver a visualizar las opciones. 
`))
