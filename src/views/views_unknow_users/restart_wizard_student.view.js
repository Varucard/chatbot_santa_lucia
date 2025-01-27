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
Por favor facilitenos el *Curso* junto al *Nombre y apellido del alumno* para que nuestros tecnicos puedan brindarle soporte ante este inconveniente.
`,
    { delay: 2000 },
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
En caso de que se haya equivocado al momento de enviar el *Nro. de Documento* del alumno, puede enviar el mensaje *Menú Principal* 🗄️ para poder volver a visualizar todas las opciones.
O envie *Adiós* para finalizar el Asistente Virtual 🤖.
Si lo desea tambien puede comunicarse con la Administración del Colegio para brindarle un mayor asesoramiento.
*cristianarielmarquez256@gmail.com* 📧
`),
  );
