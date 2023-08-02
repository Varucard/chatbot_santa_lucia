// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { validateDNI } from '../../security/validate.js'
import { barrel } from '../index.js';

/**
 * Flujo Validador Tutores.
 * El sistema valida la identidad del Tutor.
 * En caso de encontrase muestra el mensaje de menu, caso contrario lo envia al Flujo de Tutor Desconocido
 */
export const flujoValidadorTutores = addKeyword(['Validador Tutores'])
.addAnswer(`
Por favor, ingresá tu DNI para validar tu identidad en el sistema 🤖.
*Recordá que el mismo debe ser ingresado sin utilizar puntos (11222333)*
`, {capture: true}, async (ctx, {gotoFlow}) => {

  if (await validateDNI(process.env.EXCEL_TUTORS, process.env.EXCEL_TUTORS_SHEET, ctx.body)) {
    await gotoFlow(barrel.flujoMenuPrincipal)
  } else {
    await gotoFlow(barrel.barrelUsuariosDesconocidos.flujoTutorDesconocido)
  }
})
