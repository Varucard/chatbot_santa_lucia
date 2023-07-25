import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js'
import { leerArchivo } from '../../file/files.js';

let user = await leerArchivo();
let path = `files/secundaria/${user}.pdf`

export const flujoEntregaNotas = addKeyword(['Entrega Notas']).addAnswer('Adjuntamos las notas del Alummno solicitado.')
.addAnswer('archivo', {media: path})
.addAction(async (ctx, {gotoFlow}) => gotoFlow(barrel.flujoQuedarse))

// TODO En lugar de un delivery de notas segun nos soliciten podriamos hacer un delivery de archivos
