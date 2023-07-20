import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js'

/**
 * Flujo de Menu Principal 1 (Administración, Secundaria, Primaria)
 * El Usuario puede seleccionar alguna de estas opciones para obtener mas opciones
 * En caso de recibir algo incorrecto el sistema pide el reinicio
 */
export const flujoMenuPrincipal = addKeyword(['Menu Principal'])
.addAnswer([`
  Por favor, digite y envie el numero la opción a la que desea acceder 🗄️

    1 - Administración 🗃️
    2 - Secundaria 🎓
    3 - Primaria 👨🏻‍💻

  `],
{
  capture: true,
}, async (ctx, {gotoFlow, fallBack}) => {
  switch (ctx.body) {
    case '1':
      await gotoFlow(barrel.barrelAdministration.flujoMenuAdministracion)
      break;

    case '2':
      await gotoFlow(barrel.barrelSecundary.flujoMenuSecundaria)
      break;
      
    case '3':
      await gotoFlow(barrel.barrelPrimary.flujoMenuPrimaria)
      break;

    default:
      fallBack()
      break;
  }  
})
