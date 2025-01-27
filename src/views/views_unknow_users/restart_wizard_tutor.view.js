import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Tutor desconocido
 * El Tutor visualizara este flujo al momento de no ser reconocido por el validador de DNI
 * El Flujo finaliza con endFlow
 */
export const flujoTutorDesconocido = addKeyword(['DNI Desconocido Tutor'])
  .addAnswer('Validando los datos, por favor aguarde unos instantes... ⏰')
  .addAnswer(
    `
Lamentamos informale que no pudimos encontrarlo en nuestra base de datos 😔.
Pero por favor no se preocupe, acabo de alertar a nuestros tecnicos 👨🏻‍💻 para que sea cargado en nuestra base de datos 🗄️ y asi pueda utilizar nuestro nuevo servicio.
`,
    { delay: 2000 },
  )
  .addAction((ctx, { endFlow }) =>
    endFlow(`
En caso de que se haya equivocado al enviar el *Nro. de Documento*, puede enviar el mensaje *Reiniciar* para activar nuevamente al Asistente.
O envie *Adiós* para finalizar el Asistente Virtual 🤖.
Si lo desea tambien puede comunicarse con la Administración del Colegio para brindarle un mayor asesoramiento.
*cristianarielmarquez256@gmail.com* 📧
`),
  );
