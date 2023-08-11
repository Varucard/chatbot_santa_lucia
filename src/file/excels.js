import pkg from 'exceljs';
const { Workbook } = pkg;

/**
 * Matchea un valor dentro de una Hoja de Excel y retorna el contenido de la fila donde econtro la *coincidencia
 * @param {string} path ruta hacia el archivo requerido
 * @param {string} sheet nombre de la hoja en la cual debe buscar los datos
 * @param {string} column nombre de la columna donde se busca el valor deseado
 * @param {string} value valor a buscar dentro del archivo
 * 
 * Retorna una promesa de array string.
 */
export async function buscarDatoEnExcel(path, sheet, column, value) {
  const workbook = new Workbook();
  await workbook.xlsx.readFile(path);
  const sheetAux = workbook.getWorksheet(sheet);
  let filaEncontrada = null;

  sheetAux.eachRow((row, rowNumber) => {
    if (row.getCell(column).value === parseInt(value)) {
      filaEncontrada = row;
    }
  });

  if (filaEncontrada) {
    //console.log('Fila encontrada:', filaEncontrada.values);
    return filaEncontrada.values;
  } else {
    //console.log('Dato no encontrado en el archivo.');
    return filaEncontrada;
  }
}


