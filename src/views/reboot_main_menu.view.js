import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo de Reinicio al Menu Principal
 */
export const flujoReinicioMenuPrincipal = addKeyword(['Flujo Reinicio Menu'])
.addAnswer('Por favor digite la palabra "Reinicar" para reiniciar el servicio 🤖 y volver a visualizar el Menu Principal 🗄️')
