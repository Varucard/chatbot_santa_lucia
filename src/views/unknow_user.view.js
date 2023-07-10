import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flujoUsuarioDeconocido = addKeyword(['DNI desconocido'])
.addAnswer('Validando los datos, por favor aguarde un instante...')
.addAnswer(`
Lamentamos informale que no pudimos encontrarlo en nuestros archivos.
Por favor comuniquese con nuestros administradores para poder brindarle soporte ante este inconveniente.
*soporte@gmail.com*
`)
.addAnswer(`
En caso de error al momento de ingresar el Nro. de Documento, por favor envie el mensaje *Reiniciar* para volver a iniciar el asistente.
`)
