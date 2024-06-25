import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

export let informeNumero = 0;

// TODO: Este menu no sirve para esta versión, queda de muestra para una futura actualización
/**
 * Flujo Menu Secundaria Notas
 * El Usario visualizara este Menu al seleccionar la opción de Notas en el Menu de Secundaria.
 * Podra seleccionar cual informe visualizar
 * Te lleva a Flujo Validador de Archivos o Flujo Adios
 */
export const flujoMenuSecundariaNotas = addKeyword(['Menu Secundaria']).addAnswer(
  [
    `
*Sector Secundaria 🎓*
Por favor, digite y envie el numero del informe que desea visualizar 🗄️

  *1 - 1° Informe* 🧾

  *2 - 2° Informe* 🧾

  *3 - Finalizar asistencia* 🤖
`,
  ],
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body) {
      case '1':
        informeNumero = 1;
        gotoFlow(barrel.barrelArchivos.flujoValidarArchivo);
        break;

      case '2':
        informeNumero = 2;
        gotoFlow(barrel.barrelArchivos.flujoValidarArchivo);
        break;

      case '3':
        informeNumero = 3;
        await gotoFlow(barrel.flujoAdios);
        break;

      default:
        fallBack();
        break;
    }
  },
);
