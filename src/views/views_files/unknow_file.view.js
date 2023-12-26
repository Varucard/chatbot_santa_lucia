import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Archivo no Encontrado
 * El Usuario Tutor visualizara esta vista si no se encuentra el archivo solicitado en el sistema
 * El Flujo finaliza con endFlow
 */
export const flujoArchivoDeconocido = addKeyword(['Archivo Desconocido'])
  .addAnswer(
    `
Lamentamos informale que no pudimos encontrar el archivo que nos solicito 😔.
Por favor aguarde un plazo de 48hs - 72hs para volver a consultar por el mismo. Los tiempos de carga van acoplados a los tiempos de la Institución ⏰.
Le dejamos la casilla de correo de Administración por si desea comunicarse para recibir una mayor atención o poder comunicar sus dudas.
*admisantalucia@gmail.com* 📧

Tambien queremos facilitarle el contacto de nuestra web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*
`,
    { delay: 2000 },
  )
  .addAction((ctx, { gotoFlow }) => gotoFlow(barrel.flujoQuedarse));
