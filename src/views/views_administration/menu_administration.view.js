import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Administración
 */
export const flujoMenuAdministracion = addKeyword(['Flujo Administracion'])
.addAnswer('Usted ingreso al "Menu de Administración", pronto integraremos nuevas modalidades para poder brindarle mas ayuda! 🤖')
.addAction((ctx, {gotoFlow}) => gotoFlow(barrel.flujoReinicioMenuPrincipal))
