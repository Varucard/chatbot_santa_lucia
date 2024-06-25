import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Primaria
 * El Usuario visualizara esta opción al seleccionar la opción de Primaria en el Menu Principal
 * Te lleva al Flujo Quedarse
 */
export const flujoMenuPrimaria = addKeyword(['Flujo Primaria'])
  .addAnswer(
    `
*Sector de Primaria* 👨🏻‍💻

Bienvenido, por el momento te invitamos a que visite nuestra primaria a través de nuestra pagina web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/primaria-2/*

`,
  )
  .addAnswer(
    `
Si desea obtener mas información de Primara por favor comunicate a través de nuestra web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*

O envianos un mensaje a nuestra casilla de correo para responderte a la brevedad 📧 *admisantalucia@gmail.com*
Estamos para ayudarte a resolver la consulta que tengas. 🙂
  `,
  )
  .addAction((ctx, { gotoFlow }) => gotoFlow(barrel.flujoQuedarse));
