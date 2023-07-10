import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { flujoMenuPrincipal } from './main_menu.view.js'
// import { flujoDNIDesconocido } from './unknow_user.view.js'
import { validateDNI } from '../security/validate.js';

/**
 * Flujo de bienvenida.
 * El Usuario recibira este mensaje de bienvenida que le solicitara su DNI, lo tomara y buscara con el
 * validador que el dicho DNI se encuentre, si se encuentra lo enviara al flujo del main_menu, en caso
 * contrario lo enviara al flujo de unknown_user
 */
export const flujoHola = addKeyword(['Hola, quisiera información de la institución', 'hola', 'Hola'])
.addAnswer(`
*Colegio Santa Lucia* 🏫
Estamos felices de poder darte la bienvenida a nuestro chat Institucional. 🤖
Estamos para ayudarte a resolver la consulta o inconveniente que tengas. 🙂
Por favor, ingresá tu DNI para validar tu identidad en el sistema.
*Recordá que el mismo debe ser ingresado sin puntos por favor (11222333)*
`, {capture: true}, async (ctx, {gotoFlow}) => {

  console.log(validateDNI());
  /*
  if (validateDNI) {
    await gotoFlow(flujoMenuPrincipal)
  } else {
    await gotoFlow(flujoDNIDesconocido)
  }
  */
})
