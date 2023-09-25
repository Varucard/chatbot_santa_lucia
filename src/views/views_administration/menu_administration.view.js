import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Administración (Consultar Facturas)
 * El Usario visualizara este Menu al seleccionar la opción de Administración en el Menu Principal
 */
export const flujoMenuAdministracion = addKeyword(['Menu Administracion']).addAnswer(
  [
    `
*Sector Administracion 🗄️*
Por favor, digite y envie el numero la opción a la que desea acceder 🗄️

  *1 - Consultar Facturas* 🧾
  
  *2 - Finalizar Asistencia* 🤖

`,
  ],
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body) {
      case '1':
        gotoFlow(barrel.barrelArchivos.flujoEntregaNotas);
        break;

      default:
        fallBack();
        break;
    }
  },
);
