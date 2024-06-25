// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { buscarAlumnoEnExcel } from '../../file/excels.js';
import { barrel } from '../index.js';

// Guardo el DNI de Alumno y lo expando a donde lo necesito
export let dniStudent = 0;

/**
 * Flujo Validador Estudiantes.
 * El sistema valida la identidad del Alumno.
 * Te lleva al Flujo de Menu Secundaria o al Flujo de Alumno Desconocido
 */
export const flujoValidadorAlumno = addKeyword(['Validador Alumnos']).addAnswer(
  `
Por favor, para visualizar todas las opciones escriba el *Nro. de Documento del Alumno/a* 👩🏻🧑🏻 para validar su identidad 🤖.
*Recordá que el mismo debe ser ingresado sin utilizar puntos ni guiones*
*EJEMPLO: 11222333*
`,
  { capture: true },
  async (ctx, { gotoFlow }) => {
    if (
      await buscarAlumnoEnExcel(
        process.env.EXCEL_STUDENTS,
        process.env.EXCEL_STUDENTS_SHEET,
        process.env.EXCEL_COLUMN,
        ctx.body,
      )
    ) {
      dniStudent = ctx.body;
      await gotoFlow(barrel.barrelSecundary.flujoMenuSecundaria);
    } else {
      await gotoFlow(barrel.barrelUsuariosDesconocidos.flujoAlumnoDesconocido);
    }
  },
);

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
