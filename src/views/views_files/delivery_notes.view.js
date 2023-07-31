import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js'
import { dniUser } from '../views_validators/validator_students.view.js';

export const flujoEntregaNotas = addKeyword(['Entrega Notas'])
.addAnswer('Adjuntamos las notas del Alummno solicitado.')
.addAction(async (ctx, {flowDynamic}) => {
  const path = `files/secundaria/${dniUser}.pdf`
  await flowDynamic([
    {
      body: 'Archivo',
      media: path
    }
  ])
})
.addAction(async (ctx, {gotoFlow}) => gotoFlow(barrel.flujoQuedarse))

// TODO En lugar de un delivery de notas segun nos soliciten podriamos hacer un delivery de archivos
