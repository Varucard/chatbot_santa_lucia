import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Administración
 * El usuario visualizara esta vista al momento de seleccionar la opción Administración del Menu Principal
 */
export const flujoMenuAdministracion = addKeyword(['Flujo Administracion'])
.addAnswer('Usted ingreso al "Menu de Administración", pronto integraremos nuevas modalidades para poder brindarle mas ayuda! 🤖')
.addAction((ctx, {gotoFlow}) => gotoFlow(barrel.flujoReinicioSistema))
