// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { validateDNI } from '../../security/validate.js'
import { barrel } from '../index.js';

// Guardo el DNI de Alumno y lo expando a donde lo necesito
export let dniUser = 0;

/**
 * Flujo Validador Estudiantes.
 * El sistema valida la identidad del Alumno.
 * En caso de encontrase devuelve lo solicitado, caso contrario lo envia al Flujo de Alumno Desconocido
*/
export const flujoValidadorAlumno = addKeyword(['Validador Alumnos'])
.addAnswer(`
Para visualizar las opciones ingresá el DNI del Alumno/a 👩🏻🧑🏻 para validar su identidad en el sistema 🤖.
*Recordá que el mismo debe ser ingresado sin puntos por favor (11222333)*
`, {capture: true}, async (ctx, {gotoFlow}) => {
  
  if (await validateDNI(process.env.EXCEL_STUDENTS, process.env.EXCEL_STUDENTS_SHEET, ctx.body)) {
    dniUser = ctx.body
    await gotoFlow(barrel.barrelSecundary.flujoMenuSecundaria)
  } else {
    await gotoFlow(barrel.barrelUsuariosDesconocidos.flujoAlumnoDesconocido)
  }
})

//TODO en caso de ser un chico de Primaria o Secundaria se podria generar un if anidado para saber al flujo de que nivel enviarlo

/**
 * if (validador(En hoja secundaria)) {
 *  flujo secundaria
 * } else {
 *  if (validador(En hoja primaria)) {
 *    flujo primaria
 *  }
 *  flujo alumno desconocido
 * }
 */
