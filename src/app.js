// Obtengo los datos del .env
import dotenv from 'dotenv';
dotenv.config();

// Me traigo todas las vistas
import { barrel } from './views/index.js'

// Bot Whatsapp
import pkg from '@bot-whatsapp/bot'
// Creador del QR para escanear
import qr from '@bot-whatsapp/portal'
// Proveedor "Bailys"
import bp from '@bot-whatsapp/provider/baileys'
// BD
import ms from '@bot-whatsapp/database/mysql'

const { createBot, createProvider, createFlow } = pkg;
const QRPortalWeb = qr;
const BaileysProvider = bp;
const MySQLAdapter = ms;

const main = async () => {
  // Proveedor de la BD
  const adapterDB = new MySQLAdapter({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    database: process.env.MYSQL_DB_NAME,
    password: process.env.MYSQL_DB_PASSWORD,
    port: process.env.MYSQL_DB_PORT,
  })
  // Al momento de trabajar es necesario declarar todos los Flujos en esta sector
  // Al trabajar con Barrels es necesaria desglozarlos en este sector para que el sistema los reconozca
  const adapterFlow = createFlow([
    barrel.flujoAdios,
    barrel.flujoHola,
    barrel.flujoMenuPrincipal,
    barrel.flujoReinicioSistema,
    barrel.flujoQuedarse,
    barrel.flujoEntregaNotas,
    // Barrels Menu Administración 
    barrel.barrelAdministration.flujoMenuAdministracion,
    // Barrels Menu Primaria 
    barrel.barrelPrimary.flujoMenuPrimaria,
    // Barrels Menu Secundaria
    barrel.barrelSecundary.flujoMenuSecundaria,
    // Barrels Validadores
    barrel.barrelValidadores.flujoValidadorAlumno,
    barrel.barrelValidadores.flujoValidadorTutores,
    // Barrels Usuarios Desconocidos
    barrel.barrelUsuariosDesconocidos.flujoAlumnoDesconocido,
    barrel.barrelUsuariosDesconocidos.flujoAlumnoDesconocido,
    barrel.barrelUsuariosDesconocidos.flujoTutorDesconocido 
  ])
  const adapterProvider = createProvider(BaileysProvider)

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

  QRPortalWeb()
}

main()
