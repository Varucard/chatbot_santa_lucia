// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js'
// Traigo el DNI del Alumno del Validador de Estudiantes
import { dniUser } from '../views_validators/validator_students.view.js';
import { buscarDatoEnExcel } from '../../file/excels.js';

/**
 * Flujo Entrega Notas
 * El Usuario viasualizara esta opción al momento de ser validado y recibira el Boletin del chico solicitado
 */
export const flujoEntregaNotas = addKeyword(['Entrega Notas'])
.addAnswer('Adjuntamos las notas del Alummno solicitado.')
.addAction(async (ctx, {flowDynamic}) => {

  // traigo la información del Excel para construir el Path al archivo a entregar
  let url = await buscarDatoEnExcel(process.env.EXCEL_STUDENTS, process.env.EXCEL_STUDENTS_SHEET, process.env.EXCEL_COLUMN, dniUser)

  // Construyo la URL en base a lo que me llega (nivel/división/dni_alumno)
  const path = `files/${url[1]}/${url[2]}/${url[3]}.pdf`
  
  await flowDynamic([
    {
      body: 'Archivo',
      media: path
    }
  ])
})
.addAction(async (ctx, {gotoFlow}) => gotoFlow(barrel.flujoQuedarse))

// TODO En lugar de un delivery de notas segun nos soliciten podriamos hacer un delivery de archivos
