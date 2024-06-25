import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Reinicio al Menu Principal
 * El usuario podra visualizar esta vista cuando necesite reiniciar el sistema
 * El flujo finaliza con endflow
 */
export const flujoReinicioSistema = addKeyword(['Reinicio Sistema']).addAction((ctx, { endFlow }) =>
  endFlow('Por favor envie el mensaje *Reiniciar* para volver al inicio de sistema 🤖'),
);
