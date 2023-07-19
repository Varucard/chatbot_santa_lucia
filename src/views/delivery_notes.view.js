import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js'

export const flujoEntregaNotas = addKeyword(['Entrega Notas']).addAnswer('Adjuntamos las notas del Alummno solicitado.', {media: `files/secundaria/.xlsx`})
.addAction((ctx, {gotoFlow}) =>gotoFlow(barrel.flujoQuedarse))

