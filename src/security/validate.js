import pkg from 'exceljs';
const { Workbook } = pkg;

/**
 * Encuentra un valor dentro de una Hoja de Excel
 * @param {string} path ruta hacia el archivo requerido
 * @param {string} sheet nombre de la hoja en la cual debe buscar los datos
 * @param {string} value valor a buscar dentro del archivo
 * 
 * Retorna una promesa de boolean. TRUE si hay coincidencia, de lo contrario FALSE
 */
export async function validateDNI(path, sheet, value) {

  const workbook = new Workbook();

  try {

    await workbook.xlsx.readFile(path);
    const worksheet = workbook.getWorksheet(sheet);
    let valueFound = false;

    worksheet.eachRow(row => {
      row.eachCell(cell => {
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
    // console.error('Error al abrir el archivo Excel:', error); // En caso de debugear descomentar esta linea
    return false;
  }
}
