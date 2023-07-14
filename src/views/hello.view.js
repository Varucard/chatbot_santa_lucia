import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { flujoMenuPrincipal } from './main_menu.view.js'

/**
 * Flujo de bienvenida.
 * Mensaje de bienvenida que visualiza el Usuario por primera vez
 */
export const flujoHola = addKeyword(['Hola, quisiera solicitar información a la institución', 'hola', 'Hola'])
.addAnswer(`
*Colegio Santa Lucia* 🏫
Estamos felices de poder darte la bienvenida a nuestro chat Institucional. 🤖
Estamos para ayudarte a resolver la consulta o inconveniente que tengas. 🙂
`)
.addAction((ctx, {gotoFlow}) =>gotoFlow(flujoMenuPrincipal))
