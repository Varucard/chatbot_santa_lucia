import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Reinicio al Menu Principal
 */
export const flujoReinicioSistema = addKeyword(['Reinicio Sistema'])
.addAnswer('Por favor digite y envie el mensaje "Reinicar" para iniciar nuevamente el servicio 🤖')
