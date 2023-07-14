import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

//Barrels
import { barrelAdministration } from './views_administration/index.js'
import { barrelPrimary } from './views_primary/index.js'
import { barrelSecundary } from './views_secundary/index.js'

// Flujos
import { flujoReinicioMenuPrincipal } from './reboot_main_menu.view.js'

/**
 * Flujo de Menu Principal 1 (Administración, Secundaria, Primaria)
 * El Usuario puede seleccionar alguna de estas opciones para obtener mas opciones
 */
export const flujoMenuPrincipal = addKeyword(['Menu Principal', 'Reiniciar', 'reiniciar'])
.addAnswer(['Por favor, seleccione la opción a la que desea acceder 🗄️'],
{
  capture: true,
  buttons: [{body: 'Administración 🗃️'}, {body: 'Secundaria 🎓'}, {body: 'Primaria 👨🏻‍💻'}],
}, async (ctx, {gotoFlow}) => {
  switch (ctx.body) {
    case 'Administración 🗃️':
      gotoFlow(barrelAdministration.flujoMenuAdministracion)
      break;
    case 'Secundaria 🎓':
      gotoFlow(barrelSecundary.flujoMenuSecundaria)
      break;
    case 'Primaria 👨🏻‍💻':
      gotoFlow(barrelPrimary.flujoMenuPrimaria)
      break;

    default:
      gotoFlow(flujoReinicioMenuPrincipal)
      break;
  }  
})
