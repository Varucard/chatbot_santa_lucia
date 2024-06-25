import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { barrel } from '../index.js';

/**
 * Flujo Menu Administración
 * El Usuario visualizara esta opción al seleccionar la opción de Administración en el Menu Principal
 * Te lleva al Flujo Quedarse
 */
export const flujoMenuAdministracion = addKeyword(['Menu Administracion'])
  .addAnswer(
    `
*Sector de Administración* 🗃️

*El abono de cuotas se realiza del 1 al 10 de cada mes*

- Si desea consultar por costo del abono tanto de Matricula como Cuotas puede acceder a la misma ingresando a nuestra pagina: 🖥️ *https://escuelasantalucia.edu.ar/index.php/administracion/*

- Si desea abonar la cuota puede hacerlo utilizando los siguiente medios:
  - EFECTIVO
  - TARJETA DE DEBITO
  - TARJETA DE CREDITO
  - TRANSFERENCIAS BANCARIAS:
  
  *CUENTA CORRIENTE*

  *BANCO PROVINCIA*

  *CBU:* 0140040301511801021196

  *TITULAR:* CONGREGACION HIJAS DE NTRA SEÑORA DEL MONTE CALVARIO

  *CUIT:* 30630789695

- Una vez efectuado el pago, por favor, notifiquenos del mismo: 📧 *admisantalucia@gmail.com*
  - El mensaje debe contener: Nombre completo - Curso - Comprobante de pago.
  `,
  )
  .addAnswer(
    `
Si desea obtener mas información de nosotros por favor comunicate a través de nuestra web:

🖥️ *https://escuelasantalucia.edu.ar/index.php/contacto/*

O envianos un mensaje a nuestra casilla de correo para responderte a la brevedad 📧 *admisantalucia@gmail.com*
Estamos para ayudarte a resolver la consulta que tengas. 🙂
  `,
  )
  .addAction((ctx, { gotoFlow }) => gotoFlow(barrel.flujoQuedarse));

// TODO: Menú para futuras actualizaciones
/**
 * Para futuras actualizaciones
 * Flujo Menu Administración (Consultar Facturas)
 * El Usario visualizara este Menu al seleccionar la opción de Administración en el Menu Principal

export const flujoMenuAdministracion = addKeyword(['Menu Administracion']).addAnswer(
  [
    `
*Sector Administracion 🗄️*
Por favor, digite y envie el numero la opción a la que desea acceder 🗄️

  *1 - Consultar Facturas* 🧾
  
  *2 - Finalizar Asistencia* 🤖

`,
  ],
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body) {
      case '1':
        gotoFlow(barrel.barrelArchivos.flujoEntregaNotas);
        break;

      case '2':
        await gotoFlow(barrel.flujoAdios);
        break;

      default:
        fallBack();
        break;
    }
  },
);
*/
