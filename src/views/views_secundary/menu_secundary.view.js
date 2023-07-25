import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js'

/**
 * Flujo Menu Secundaria (Consultar Notas)
 */
export const flujoMenuSecundaria = addKeyword(['Menu Secundaria'])
.addAnswer([`
*Sector Secundaria 🎓*
Por favor, digite y envie el numero la opción a la que desea acceder 🗄️

  1 - Consultar Notas 🧾

`],
{
  capture: true,
}, async (ctx, {gotoFlow, fallBack}) => {
  switch (ctx.body) {
    case '1':
      gotoFlow(barrel.barrelArchivos.flujoEntregaNotas)
      break;

    default:
      fallBack()
      break;
  }
})
