// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

// Me traigo todas las vistas
import { barrel } from './views/index.js'

// Bot Whatsapp
import pkg from '@bot-whatsapp/bot'
// Proveedor "Meta"
import mt from '@bot-whatsapp/provider/meta'
// BD
import jfa from '@bot-whatsapp/database/json'

const { createBot, createProvider, createFlow } = pkg;
const MetaProvider = mt;
const JsonFileAdapter = jfa;

const main = async () => {
  // Proveedor de la BD
  const adapterDB = new JsonFileAdapter()
  // Al momento de trabajar es necesario declarar todos los Flujos en esta sector
  // Al trabajar con Barrels es necesaria desglozarlos en este sector para que el sistema los reconozca
  const adapterFlow = createFlow([
    barrel.flujoHola,
    barrel.flujoMenuPrincipal,
    // Barrels Menu Administración 
    barrel.barrelAdministration.flujoMenuAdministracion,
    // Barrels Menu Primaria 
    barrel.barrelPrimary.flujoMenuPrimaria,
    // Barrels Menu Secundaria
    barrel.barrelSecundary.flujoMenuSecundaria,
    barrel.flujoUsuarioDeconocido,
    barrel.flujoReinicioMenuPrincipal,
    barrel.flujoAdios
  ])
  // Instancia donde se crea el proveedor del servicio
  const adapterProvider = createProvider(MetaProvider, {
    jwtToken: process.env.JWTOKEN,
    numberId: process.env.NUMBER_ID,
    verifyToken: process.env.VERIFY_TOKEN,
    version:'v16.0'
  })

  // Instancia donde se crea el Bot
  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

}

main()
