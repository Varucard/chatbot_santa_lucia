import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Administración
 * El Usuario visualizara esta opción al seleccionar la opción de Administración en el Menu Principal
 */
export const flujoMenuAdministracion = addKeyword(['Menu Administracion'])
  .addAnswer(
    'Usted ingreso al "Sector de Administración", pronto integraremos nuevas modalidades para poder brindarle nuevas opciones y mas ayuda! 🤖',
  )
  .addAction((ctx, { gotoFlow }) => gotoFlow(barrel.flujoReinicioSistema));

/**
 * Para futuras actualizaciones
 * Flujo Menu Administración (Consultar Facturas)
 * El Usario visualizara este Menu al seleccionar la opción de Administración en el Menu Principal

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

      case '2':
        await gotoFlow(barrel.flujoAdios);
        break;

      default:
        fallBack();
        break;
    }
  },
);
*/
