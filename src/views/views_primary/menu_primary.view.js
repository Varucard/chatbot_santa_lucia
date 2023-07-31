import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Primaria
 * El Usuario visualizara esta opción al seleccionar la opción de Primaria en el Menu Principal
 */
export const flujoMenuPrimaria = addKeyword(['Flujo Primaria'])
.addAnswer('Usted ingreso al "Menu de Primaria", pronto integraremos nuevas modalidades para poder brindarle mas ayuda! 🤖')
.addAction((ctx, {gotoFlow}) => gotoFlow(barrel.flujoReinicioSistema))
