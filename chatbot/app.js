const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal') // Permite la creación de la pagina web para mostrar el QR
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const flujoHola = addKeyword(['hola', 'buenas']).addAnswer('Bienvenido a la bot')
.addAnswer('¿Como es tu email?', {capture: true}, (ctx, {fallBack}) => {
    if(!ctx.body.includes('@')) {
        return fallBack()
    }
    console.log('Aqui viene todo: ', ctx)
})
.addAnswer('Validando la información')
.addAnswer('Aca le dejamos su factura', {
    media: 'prueba.xlsx'
})

const flujoAdios = addKeyword(['gracias']).addAnswer('Hasta luego');

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flujoHola, flujoAdios])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
