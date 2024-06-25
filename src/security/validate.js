/**
 * Valida si un número es un DNI Argentino
 * @param {string} dni número de DNI a validar
 *
 * Retorna boolean
 */
export function validarDNI(dni) {
  const dniRegex = /^[0-9]{7,8}$/;
  return dniRegex.test(dni);
}
