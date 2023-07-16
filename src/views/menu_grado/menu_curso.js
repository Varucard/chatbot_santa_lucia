import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

// Flujos
import { barrel } from '../index.js'

/**
 * Flujo Menu Curso
 */
export const flujoMenuCurso = addKeyword(['Flujo Curso'])
.addAnswer(['Por favor seleccione el Curso'],
{
  capture: true,
  buttons: [{body: '1'}, {body: '2'}, {body: '3'}]
}, async (ctx, {gotoFlow}) => {
  switch (ctx.body) {
    case '1':
      gotoFlow()
      break;

    case '2':
      gotoFlow()
    break;

    case '3':
      gotoFlow()
    break;

    case '4':
      gotoFlow()
    break;

    case '5':
      gotoFlow()
    break;

    case '6':
      gotoFlow()
    break;

    default:
      gotoFlow(barrel.flujoReinicioMenuPrincipal)
      break;
  }
})
