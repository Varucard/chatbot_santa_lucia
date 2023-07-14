Por favor, ingresá tu DNI para validar tu identidad en el sistema.
*Recordá que el mismo debe ser ingresado sin puntos por favor (11222333)*
`, {capture: true}, async (ctx, {gotoFlow}) => {

  if (await validateDNI('files/identidades/secundaria/dni_padres.xlsx', '1a', ctx.body)) {
    await gotoFlow(flujoMenuPrincipal)
  } else {
    await gotoFlow(flujoUsuarioDeconocido)
  }
})
