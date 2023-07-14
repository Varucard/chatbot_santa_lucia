import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

/**
 * Flujo Menu Secundaria
 */
export const flujoMenuSecundaria = addKeyword(['Flujo Secundaria'])
.addAnswer('Menu Secundaria')
