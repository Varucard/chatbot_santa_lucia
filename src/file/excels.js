import pkg from 'exceljs';
const { Workbook } = pkg;

/**
 * Matchea un valor dentro de una Hoja de Excel y retorna el contenido de la fila donde econtro la *coincidencia
 * @param {string} path ruta hacia el archivo requerido
 * @param {string} sheet nombre de la hoja en la cual debe buscar los datos
 * @param {string} column nombre de la columna donde se busca el valor deseado
 * @param {string} value valor a buscar dentro del archivo
 * @returns una promesa de array string.
 */
export async function buscarAlumnoEnExcel(path, sheet, column, value) {
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

/**
 * Encuentra un valor dentro de una Hoja de Excel
 * @param {string} path ruta hacia el archivo requerido
 * @param {string} sheet nombre de la hoja en la cual debe buscar los datos
 * @param {string} value valor a buscar dentro del archivo
 * @returns una promesa de boolean
 */
export async function buscarDNIEnExcel(path, sheet, value) {
  const workbook = new Workbook();

  try {
    await workbook.xlsx.readFile(path);
    const worksheet = workbook.getWorksheet(sheet);
    let valueFound = false;

    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        if (cell.value.toString() === value) {
          valueFound = true;
        }
      });
    });

    if (!valueFound) {
      return false;
    }

    return true;
  } catch (error) {
    //console.error('Error al abrir el archivo Excel:', error); // En caso de debugear descomentar esta linea y guardar lo que devuelve en una variable
    return false;
  }
}
