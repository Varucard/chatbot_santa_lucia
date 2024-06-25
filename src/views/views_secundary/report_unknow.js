import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Listado de palabras que el Bot acepta
let listadoReporte = ['Reporte', 'report', 'reporte', 'informe', 'Informe', 'Rite', 'rite', 'RITE'];

/**
 * Flujo para Usuarios que consultan directamente por el informe
 * El Usario visualizara este mensaje al enviar las palabras claves referidas a informe.
 * El Flujo finaliza con endFlow
 */
export const flujoReporteDesconocido = addKeyword(listadoReporte).addAction((ctx, { endFlow }) =>
  endFlow(
    `
*Colegio Santa Lucia* 🏫

¡Hola! Estamos felices de poder darte la bienvenida a nuestro chat Institucional 🤖.
Sabemos que estas aqui para encontrar obtener las notas de los alumnos 🧾.
A continuación envia la palabra *Chatbot* 🤖 para iniciar el sistema y poder acceder a las notas.
Recordar que debes seguir las intruccioes que el sistema brinda para acceder a lo que buscas! 👋
  `,
  ),
);
