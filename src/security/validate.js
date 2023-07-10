import pkg from 'xlsx-populate';
const XlsxPopulate = pkg;

export function validateDNI() {

  XlsxPopulate.fromFileAsync('files/identidades/secundaria/dni_alumnos_1_a.xlsx')
  .then(workbook => {
    const sheet = workbook.sheet('Hoja1');
    const cell = sheet.find('21903130');

    if (cell && cell.value === '21903130') {
      const address = `${String.fromCharCode(64 + cell.columnNumber)}${cell.rowNumber}`;
      console.log('Se encontró el valor en la celda:', address);
      // Realiza la validación del dato ingresado aquí
    } else {
      console.log('No se encontró el valor.');
    }
  })
  .catch(error => {
    console.error('Error al abrir el archivo Excel:', error);
  });
}
