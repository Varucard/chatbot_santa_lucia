// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

// Traigo la URL al archivo una vez validada
import { pathFileStudent } from './validate_file.view.js';

/**
 * Flujo Entrega Notas
 * El Usuario viasualizara esta opción al momento de ser validado y recibira el Boletin del chico solicitado
 */
export const flujoEntregaNotas = addKeyword(['Entrega Notas'])
  .addAnswer('Adjuntamos el informe del Alummno solicitado.')
  .addAction(async (ctx, { flowDynamic }) => {
    await flowDynamic([
      {
        body: 'Archivo',
        media: pathFileStudent,
      },
    ]);
  })
  .addAction(async (ctx, { gotoFlow }) => gotoFlow(barrel.flujoQuedarse));
