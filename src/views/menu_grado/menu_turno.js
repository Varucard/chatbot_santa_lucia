import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Barrels
import { barrel } from '../index.js'
import { barrelMenuGrado } from './index.js'

/**
 * Flujo Menu Turno
 */
export const flujoMenuTurno = addKeyword(['Flujo Turno'])
.addAnswer(['Por favor seleccione el turno'],
{
  capture: true,
  buttons: [{body: 'T.M (Turno Mañana) 🌚'}, {body: 'T.T (Turno Tarde) 🌝'}]
}, async (ctx, {gotoFlow}) => {
  switch (ctx.body) {
    case 'T.M (Turno Mañana) 🌚':
      gotoFlow(barrelMenuGrado.flujoMenuDivision)
      break;
      
    case 'T.T (Turno Tarde) 🌝':
      gotoFlow(barrelMenuGrado.flujoMenuDivision)
      break;

    default:
      gotoFlow(barrel.flujoReinicioMenuPrincipal)
      break;
  }
})
