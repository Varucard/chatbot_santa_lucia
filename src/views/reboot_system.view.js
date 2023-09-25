import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Reinicio al Menu Principal
 * El usuario podra visualizar esta vista cuando necesite reiniciar el sistema
 */
export const flujoReinicioSistema = addKeyword(['Reinicio Sistema']).addAction((ctx, { endFlow }) =>
  endFlow('Por favor digite y envie el mensaje *Reiniciar* para volver a iniciar el servicio 🤖'),
);
