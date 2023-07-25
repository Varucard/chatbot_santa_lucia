import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { validateDNI } from '../../security/validate.js'
import { barrel } from '../index.js';
import { crearArchivo } from '../../file/files.js';

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
  
  if (await validateDNI('files/alumnos/dni_alumnos.xlsx', '1a', ctx.body) && await crearArchivo(ctx.body)) {
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
