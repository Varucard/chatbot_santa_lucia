// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import fs from 'fs';

import { barrel } from '../index.js';
// Traigo el DNI del Alumno del Validador de Estudiantes
import { dniStudent } from '../views_validators/validator_students.view.js';
// import { informeNumero } from '../views_secundary/menu_secundary_notes.view.js'; Futura versión?
import { buscarAlumnoEnExcel } from '../../file/excels.js';

export let pathFileStudent = '';

/**
 * Flujo Validador Archivos
 * El Sistema pasara por aca para determinar si el archivo existe.
 * En caso de que exista redirigira al Flujo Entrega Notas.
 * En caso de que no existe refirigira al Flujo Archivo Desconocido
 * Te lleva al Flujo de Entrega de Notas o al Flujo de Archivo Desconocido
 */
export const flujoValidarArchivo = addKeyword(['Validador Archivos'])
  .addAnswer('Buscando el archivo solicitado, por favor aguarde unos instantes... ⏰')
  .addAction(async (ctx, { gotoFlow }) => {
    // traigo la información del Excel para construir el Path al archivo a entregar
    let url = await buscarAlumnoEnExcel(
      process.env.EXCEL_STUDENTS,
      process.env.EXCEL_STUDENTS_SHEET,
      process.env.EXCEL_COLUMN,
      dniStudent,
    );

    // Construyo la URL en base a lo que me llega
    // URL: /secundaria/turno/nivel_división/dni_alumno
    pathFileStudent = `files/${url[1]}/${url[2]}/${url[3]}/${url[4]}.pdf`;

    if (fs.existsSync(pathFileStudent)) {
      await gotoFlow(barrel.barrelArchivos.flujoEntregaNotas);
    } else {
      await gotoFlow(barrel.barrelArchivos.flujoArchivoDeconocido);
    }
  });
