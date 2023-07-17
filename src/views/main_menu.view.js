import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js'

/**
 * Flujo de Menu Principal 1 (Administración, Secundaria, Primaria)
 * El Usuario puede seleccionar alguna de estas opciones para obtener mas opciones
 * En caso de recibir algo incorrecto el sistema pide el reinicio
 */
export const flujoMenuPrincipal = addKeyword(['Menu Principal'])
.addAnswer(['Por favor, seleccione la opción a la que desea acceder 🗄️'],
{
  capture: true,
  buttons: [{body: 'Administración 🗃️'}, {body: 'Secundaria 🎓'}, {body: 'Primaria 👨🏻‍💻'}],
}, async (ctx, {gotoFlow}) => {
  switch (ctx.body) {
    case 'Administración 🗃️':
      gotoFlow(barrel.barrelAdministration.flujoMenuAdministracion)
      break;
    case 'Secundaria 🎓':
      gotoFlow(barrel.barrelSecundary.flujoMenuSecundaria)
      break;
    case 'Primaria 👨🏻‍💻':
      gotoFlow(barrel.barrelPrimary.flujoMenuPrimaria)
      break;

    default:
      gotoFlow(barrel.flujoReinicioSistema)
      break;
  }  
})
