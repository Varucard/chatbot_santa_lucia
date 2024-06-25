import fsPromise from 'fs/promises';
import fsExtra from 'fs-extra';
import path from 'path';

// Obtén el directorio de trabajo actual
const directorioActual = process.cwd();

// Obtengo la ruta donde guardar el archivo
const directorio = path.join(directorioActual, 'files', 'tmp');

// Asegúrate de que el directorio exista, de lo contrario lo crea
fsExtra.ensureDirSync(directorio);

// Emsamblo la ruta junto con el nombre del archivo temporal
const rutaCompleta = path.join(directorio, 'archivo.txt');

/**
 * Verifica que un archivo exista
 * @param {string} rutaCompleta ruta donde se verifica el archivo
 * @returns una promesa de booleano
 */
export async function verificarExistenciaArchivo(rutaCompleta) {
  try {
    await fsPromise.access(rutaCompleta);
    return true;
  } catch (error) {
    try {
      await fsPromise.writeFile(rutaCompleta, '');
      return true;
    } catch (error) {
      return false;
    }
  }
}

/**
 * Graba un dato al final de un archivo de texto
 * @param {string} value valor a grabar en el final de un archivo
 * @returns una promesa de booleano
 */
// TODO: ¿Posible mejora para pasar en que archivo se graba?
export async function guardarTutor(value) {
  if (await verificarExistenciaArchivo(rutaCompleta)) {
    const contenido = await fsPromise.readFile(rutaCompleta, 'utf8');
    const nuevoContenido = contenido + value + '\n';
    await fsPromise.writeFile(rutaCompleta, nuevoContenido, 'utf8');

    return true;
  }

  return false;
}
