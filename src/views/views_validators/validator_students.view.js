import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { validateDNI } from '../../security/validate.js'
import { barrel } from '../index.js';

/**
 * Flujo Validador Estudiantes.
 * El sistema valida la identidad del Alumno.
 * En caso de encontrase devuelve lo solicitado, caso contrario lo envia al Flujo de Alumno Desconocido
 */
export const flujoValidadorAlumno = addKeyword(['Validador Alumnos'])
.addAnswer(`
Por favor, ingresá el DNI del Alumno/a 👩🏻🧑🏻 para validar su identidad en el sistema 🤖.
*Recordá que el mismo debe ser ingresado sin puntos por favor (11222333)*
`, {capture: true}, async (ctx, {gotoFlow}) => {

  if (await validateDNI('files/alumnos/dni_alumnos.xlsx', '1a', ctx.body)) {
    await gotoFlow(barrel.flujoMenuPrincipal) //Entrega de notas
  } else {
    await gotoFlow(barrel.barrelUsuariosDesconocidos.flujoAlumnoDesconocido)
  }
})
