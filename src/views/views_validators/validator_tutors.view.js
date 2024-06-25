// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { buscarDNIEnExcel } from '../../file/excels.js';
import { guardarTutor } from '../../file/files.js';
import { barrel } from '../index.js';

/**
 * Flujo Validador Tutores.
 * El sistema valida la identidad del Tutor.
 * Te lleva al Flujo de Menu Principal o al Flujo de tutor Desconocido
 */
export const flujoValidadorTutores = addKeyword(['Validador Tutores']).addAnswer(
  `
Para continuar con el Asistente, por favor envianos el *Nro. de Documento del Padre/Madre/Tutor* para ingresar al sistema 🤖.
*Recordá que el mismo debe ser ingresado sin utilizar puntos ni guiones*
*EJEMPLO: 11222333*
`,
  { capture: true },
  async (ctx, { gotoFlow }) => {
    if (
      await buscarDNIEnExcel(process.env.EXCEL_TUTORS, process.env.EXCEL_TUTORS_SHEET, ctx.body)
    ) {
      await gotoFlow(barrel.flujoMenuPrincipal);
    } else {
      await guardarTutor(ctx.body);
      await gotoFlow(barrel.barrelUsuariosDesconocidos.flujoTutorDesconocido);
    }
  },
);
