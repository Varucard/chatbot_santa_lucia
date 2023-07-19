import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js'

/**
 * Flujo Menu Secundaria (Consultar Notas)
 */
export const flujoMenuSecundaria = addKeyword(['Menu Secundaria'])
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
      gotoFlow(barrel.barrelValidadores.flujoValidadorAlumno)
      break;

    default:
      gotoFlow(barrel.flujoReinicioSistema)
      break;
  }
})
