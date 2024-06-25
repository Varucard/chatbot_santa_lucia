import { flujoEntregaNotas } from './delivery_notes.view.js';
import { flujoArchivoDeconocido } from './unknow_file.view.js';
import { flujoValidarArchivo } from './validate_file.view.js';

/**
 * Barrel de:
 *  - Validador de archivos
 *  - Archivo desconocido
 *  - Delivery de archivos (Notas y facturas)
 */
export const barrelArchivos = {
  flujoEntregaNotas,
  flujoArchivoDeconocido,
  flujoValidarArchivo,
};
