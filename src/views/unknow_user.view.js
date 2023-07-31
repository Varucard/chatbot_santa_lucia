import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Usuario Desconocido
 * El Usuario visualizara esta vista si no se encuentra registrado en el sistema
 * El Flujo finaliza con endFlow
 */
export const flujoUsuarioDeconocido = addKeyword(['DNI desconocido'])
.addAnswer('Validando los datos, por favor aguarde un instante... ⏰')
.addAnswer(`
Lamentamos informale que no pudimos encontrarlo en nuestros archivos 😔.
Por favor comuniquese con nuestros administradores para poder brindarle soporte ante este inconveniente.
*soporte@gmail.com* 📧
`, {delay: 2000})
.addAction((ctx, {endFlow}) => endFlow(`
En caso de error al momento de ingresar el Nro. de Documento, por favor envie el mensaje *Reiniciar* para volver a iniciar el asistente 🤖.
`))

