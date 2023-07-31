// Barrels
import { barrelAdministration } from './views_administration/index.js'
import { barrelPrimary } from './views_primary/index.js'
import { barrelSecundary } from './views_secundary/index.js'
import { barrelValidadores } from './views_validators/index.js'
import { barrelUsuariosDesconocidos } from './views_unknow_users/index.js'
import { barrelArchivos } from './views_files/index.js'

// Vistas
import { flujoAdios } from './by.view.js'
import { flujoHola } from './hello.view.js'
import { flujoMenuPrincipal } from './main_menu.view.js'
import { flujoReinicioSistema } from './reboot_system.view.js'
import { flujoQuedarse } from './stay.view.js'
import { flujoUsuarioDeconocido } from './unknow_user.view.js'

// Barrel principal, de aqui exporto todos los flujos hacia afuera de views
// Puedo cargar Barrels de otros sectores
export const barrel = {
  flujoAdios,
  flujoHola,
  flujoMenuPrincipal,
  flujoReinicioSistema,
  flujoQuedarse,
  flujoUsuarioDeconocido,
  // Barrels
  barrelAdministration,
  barrelPrimary,
  barrelSecundary,
  barrelValidadores,
  barrelUsuariosDesconocidos,
  barrelArchivos
}; 

