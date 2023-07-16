import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Flujos
import { barrel } from '../index.js'
import { barrelMenuGrado } from './index.js'

/**
 * Flujo Menu Division
 */
export const flujoMenuDivision = addKeyword(['Flujo Division'])
.addAnswer(['Por favor seleccione la Division'],
{
  capture: true,
  buttons: [{body: 'A'}, {body: 'B'}]
}, async (ctx, {gotoFlow}) => {
  switch (ctx.body) {
    case 'A':
      gotoFlow(barrelMenuGrado.flujoMenuCurso)
      break;
      
    case 'B':
      gotoFlow(barrelMenuGrado.flujoMenuCurso)
      break;

    default:
      gotoFlow(barrel.flujoReinicioMenuPrincipal)
      break;
  }
})
