import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js'
import { leerArchivo } from '../../file/files.js';

let user;

user = leerArchivo();

export const flujoEntregaNotas = addKeyword(['Entrega Notas'])
.addAnswer('Adjuntamos las notas del Alummno solicitado.')
.addAnswer('Archivo', { media: `files/secundaria/${user}.pdf`})
.addAction(async (ctx, {gotoFlow}) => gotoFlow(barrel.flujoQuedarse))

user = 0;
// TODO En lugar de un delivery de notas segun nos soliciten podriamos hacer un delivery de archivos
