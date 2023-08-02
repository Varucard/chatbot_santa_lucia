import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js'

// Listado de palabras que el Bot acepta
let listado = ['hola', 'Hola','Buenos días', 'Buenos dias', 'buenos dias', 'Reiniciar', 'reiniciar', 'ChatBot', 'chatbot', 'Chatbot'];

/**
 * Flujo de bienvenida.
 * Mensaje de bienvenida que visualiza el Usuario por primera vez
 * Te envia a Validador de Tutores
 */
export const flujoHola = addKeyword(listado)
.addAnswer(`
*Colegio Santa Lucia* 🏫
Estamos felices de poder darte la bienvenida a nuestro chat Institucional. 🤖
Estamos para ayudarte a resolver la consulta o inconveniente que tengas. 🙂
`)
.addAction((ctx, {gotoFlow}) => gotoFlow(barrel.barrelValidadores.flujoValidadorTutores))
