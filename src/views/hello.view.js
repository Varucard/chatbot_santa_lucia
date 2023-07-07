import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flujoHola = addKeyword(['hola', 'buenas'])
.addAnswer('Bienvenido a la bot')
.addAnswer('¿Como es tu email?', {capture: true}, (ctx, {fallBack}) => {
    if(!ctx.body.includes('@')) {
        return fallBack()
    }
    console.log('Aqui viene todo: ', ctx)
})
.addAnswer('Validando la información')
.addAnswer('Aca le dejamos su factura', {
    media: './files/secundaria/turno_mañana/1_a/ritel.xlsx'
})
