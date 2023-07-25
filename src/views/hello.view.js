import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js'

/**
 * Flujo de bienvenida.
 * Mensaje de bienvenida que visualiza el Usuario por primera vez
 * Te envia a Validador de Tutores
 */
export const flujoHola = addKeyword(['hola', 'Hola', 'Reiniciar', 'reiniciar'])
.addAnswer(`
*Colegio Santa Lucia* 🏫
Estamos felices de poder darte la bienvenida a nuestro chat Institucional. 🤖
Estamos para ayudarte a resolver la consulta o inconveniente que tengas. 🙂
`)
.addAction((ctx, {gotoFlow}) => gotoFlow(barrel.barrelValidadores.flujoValidadorTutores))
