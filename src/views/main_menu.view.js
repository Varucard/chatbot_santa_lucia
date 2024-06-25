import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from './index.js';

let listadoMenu = [
  'Menú Principal',
  'Menu Principal',
  'menu principal',
  'Menu',
  'Menú',
  'menu',
  'menú',
];

/**
 * Flujo de Menu Principal 1 (Administración, Secundaria, Primaria)
 * El Usuario puede digitar para seleccionar alguna de estas opciones para obtener mas opciones
 * En caso de recibir algo incorrecto el sistema vuelve a enviar este mensaje, de lo contrario te deriva a uno los sectores
 */
export const flujoMenuPrincipal = addKeyword(listadoMenu).addAnswer(
  [
    `
Por favor, envie el numero del sector al que desea acceder 🗄️

  *1 - Administración* 🗃️
  *2 - Secundaria* 🎓
  *3 - Primaria* 👨🏻‍💻

  *4 - Finalizar Asistencia* 🤖

  `,
  ],
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body) {
      case '1':
        await gotoFlow(barrel.barrelAdministration.flujoMenuAdministracion);
        break;

      case '2':
        await gotoFlow(barrel.barrelValidadores.flujoValidadorAlumno);
        break;

      case '3':
        await gotoFlow(barrel.barrelPrimary.flujoMenuPrimaria);
        break;

      case '4':
        await gotoFlow(barrel.flujoAdios);
        break;

      default:
        fallBack();
        break;
    }
  },
);
