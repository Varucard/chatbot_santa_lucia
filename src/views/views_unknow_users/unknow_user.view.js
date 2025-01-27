import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// TODO: No se utiliza en esta versión
/**
 * Flujo Usuario Desconocido
 * El Usuario Tutor visualizara esta vista si no se encuentra registrado en el sistema
 * El Flujo finaliza con endFlow
 */
export const flujoUsuarioDeconocido = addKeyword(['DNI desconocido'])
  .addAnswer('Validando los datos, por favor aguarde un instante... ⏰')
  .addAnswer(
    `
Lamentamos informale que no pudimos encontrarlo en nuestros archivos 😔.
Por favor comuniquese con la Administración del Colegio para poder brindarle soporte ante este inconveniente.
*cristianarielmarquez256@gmail.com* 📧
`,
    { delay: 2000 },
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
En caso de que se haya equivocado al momento de digitar y enviar el Nro. de Documento, por favor digite y envie el mensaje *Reiniciar* para poder volver a ingresar el *Nro. de Documento* 🤖.
`),
  );
