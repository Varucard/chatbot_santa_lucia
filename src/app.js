import { barrel } from './views/index.js'
import pkg from '@bot-whatsapp/bot'
import qr from '@bot-whatsapp/portal'
import bp from '@bot-whatsapp/provider/baileys'
import jfa from '@bot-whatsapp/database/json'

const { createBot, createProvider, createFlow } = pkg;
const QRPortalWeb = qr;
const BaileysProvider = bp;
const JsonFileAdapter = jfa;

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([barrel.flujoHola, barrel.flujoAdios])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
