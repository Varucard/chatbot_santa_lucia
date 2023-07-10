import dotenv from 'dotenv';
dotenv.config();

import { barrel } from './views/index.js'
import pkg from '@bot-whatsapp/bot'
import mt from '@bot-whatsapp/provider/meta'
import jfa from '@bot-whatsapp/database/json'

const { createBot, createProvider, createFlow } = pkg;
const MetaProvider = mt;
const JsonFileAdapter = jfa;

const main = async () => {
  const adapterDB = new JsonFileAdapter()
  const adapterFlow = createFlow([
    barrel.flujoHola,
    barrel.flujoMenuPrincipal,
    barrel.flujoUsuarioDeconocido,
    barrel.flujoAdios
  ])
  const adapterProvider = createProvider(MetaProvider, {
    jwtToken: process.env.JWTOKEN,
    numberId: process.env.NUMBER_ID,
    verifyToken: process.env.VERIFY_TOKEN,
    version:'v16.0'
  })

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

}

main()
