import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Secundaria (Consultar Notas)
 * El Usario visualizara este Menu al seleccionar la opción de Secundaria en el Menu Principal
 */
export const flujoMenuSecundaria = addKeyword(['Menu Secundaria']).addAnswer(
  [
    `
*Sector Secundaria 🎓*
Por favor, digite y envie el numero de la opción a la que desea acceder 🗄️

  *1 - Consultar Notas* 🧾

  *2 - Finalizar asistencia* 🤖
`,
  ],
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body) {
      case '1':
        gotoFlow(barrel.barrelSecundary.flujoMenuSecundariaNotas);
        break;

      case '2':
        await gotoFlow(barrel.flujoAdios);
        break;

      default:
        fallBack();
        break;
    }
  },
);
