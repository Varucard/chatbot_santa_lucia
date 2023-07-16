import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Barrels
import { barrelMenuGrado } from '../menu_grado/index.js'
import { barrel } from '../index.js'

/**
 * Flujo Menu Secundaria (Consultar Notas)
 */
export const flujoMenuSecundaria = addKeyword(['Flujo Secundaria'])
.addAnswer([`
*Sector Secundaria 🎓*
Por favor, seleccione la opción a la que desea acceder 🗄️
`],
{
  capture: true,
  buttons: [{body: 'Consultar Notas 🧾'}]
}, async (ctx, {gotoFlow}) => {
  switch (ctx.body) {
    case 'Consultar Notas 🧾':
      gotoFlow(barrelMenuGrado.flujoMenuTurno)
      break;

    default:
      gotoFlow(barrel.flujoReinicioMenuPrincipal)
      break;
  }
})
