import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

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
*admisantalucia@gmail.com* 📧
`,
    { delay: 2000 },
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
En caso de equivocación al momento de a ver ingresar el Nro. de Documento, por favor digita y envia el mensaje *Reiniciar* para volver a ingresar tu Nro. de Documento 🤖.
`),
  );
