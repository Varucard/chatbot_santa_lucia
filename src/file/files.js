import fs from 'fs';
import path from 'path';

// Armo la ruta donde voy a almacenar el archivo temporal
const directorio = path.join('C:', 'chatbot_santa_lucia', 'files', 'tmp');
// Emsamblo la ruta junto con el nombre del archivo temporal
const rutaCompleta = path.join(directorio, 'archivo.txt');

/**
 * Crea un archivo con el unico contenido del ID que se le pase
 * @param {string} id Dato que se quiere guardar en el archivo
 * @returns Retorna TRUE si fue creado, de lo contrario retorna FALSE
 */
export function crearArchivo(id) {

  let flag = true;

  fs.writeFileSync(rutaCompleta, id, (err) => {
    if (err) {
      flag = false;
    }
  });

  return flag;
}
// TODO Posibilidad de modificar la función para que se le pueda pasar la ruta de creación del archivo

export function leerArchivo() {
  const data = fs.readFileSync(rutaCompleta, 'utf8');
  console.log('Contenido del archivo:', data);
  return data;
}

export function eliminarArchivo() {
  fs.unlinkSync(rutaCompleta, (error) => {
    if (error) {
      console.error('Error al eliminar el archivo:', error);
    } else {
      console.log('Archivo eliminado correctamente.');
    }});
}

export function entregaDatos() {
  let user = leerArchivo();
  let path = `files/secundaria/${user}.pdf`

  eliminarArchivo();

  return path;

}
