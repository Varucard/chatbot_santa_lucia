import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Alumno desconocido
 * El Tutor visualizara este flujo al momento de no ser reconocido el estudiante por el validador de DNI
 * El Flujo finaliza con endFlow
 */
export const flujoAlumnoDesconocido = addKeyword(['DNI Desconocido Alumno'])
  .addAnswer('Validando los datos, por favor aguarde unos instantes... ⏰')
  .addAnswer(
    `
Lamentamos informale que no pudimos encontrar al Alumno/a en nuestros archivos 😔.
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
