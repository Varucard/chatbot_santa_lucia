// Barrels vistas
import { barrelAdministration } from './views_administration/index.js'
import { barrelPrimary } from './views_primary/index.js'
import { barrelSecundary } from './views_secundary/index.js'

// Vistas
import { flujoHola } from './hello.view.js'
import { flujoMenuPrincipal } from './main_menu.view.js'
import { flujoUsuarioDeconocido } from './unknow_user.view.js'
import { flujoReinicioMenuPrincipal } from './reboot_main_menu.view.js'
import { flujoAdios } from './by.view.js'

// Barrel principal, de aqui exporto todos los flujos hacia afuera de views
// Puedo cargar Barrels de otros sectores
export const barrel = {
  flujoHola,
  flujoMenuPrincipal,
  barrelAdministration,
  barrelPrimary,
  barrelSecundary,
  flujoUsuarioDeconocido,
  flujoReinicioMenuPrincipal,
  flujoAdios
}; 

