import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { flujoMenuPrincipal } from './main_menu.view.js'

export const flujoHola = addKeyword([])
.addAnswer(`Le damos la bienvenida a nuestro chat Institucional Oficial 🏫
Estamos encantados de poder ayudarte a resolver la consulta o inconveniente que tengas`)
.addAnswer(flujoMenuPrincipal)
