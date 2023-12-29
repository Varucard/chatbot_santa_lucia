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
En caso de que se haya equivocado al momento de digitar y enviar el Nro. de Documento, por favor digite y envie el mensaje *Reiniciar* para poder volver a ingresar el *Nro. de Documento* 🤖. 
`),
  );
