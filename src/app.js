import { flujoHola } from './views/hello.view.js'
import pkg from '@bot-whatsapp/bot'
import qr from '@bot-whatsapp/portal'
import bp from '@bot-whatsapp/provider/baileys'
import jfa from '@bot-whatsapp/database/json'

const { createBot, createProvider, createFlow, addKeyword } = pkg;
const QRPortalWeb = qr;
const BaileysProvider = bp;
const JsonFileAdapter = jfa;

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
