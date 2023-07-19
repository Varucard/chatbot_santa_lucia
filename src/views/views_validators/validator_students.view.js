import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

import { validateDNI } from '../../security/validate.js'

import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

async function uploadImageLocal(fileLocalPath) {
  try {
    const formData = new FormData();
    formData.append('image', fs.createReadStream(fileLocalPath));

    const response = await axios.post('http://localhost:4000/upload', formData, {
      headers: formData.getHeaders(),
    });

    return response.data.imageUrl; // Devuelve la URL de la imagen
  } catch (error) {
    console.error('Error al subir la imagen:', error.message);
    return null;
  }
}

// Llama a la función para subir la imagen
const localImagePath = 'C:/chatbot_santa_lucia/files/secundaria/41550112.png'; // Ajusta la ruta a tu imagen local

async function main() {
  try {
    const imageUrl = await uploadImageLocal(localImagePath);
    console.log('Imagen subida exitosamente:', imageUrl);
    return imageUrl;
  } catch (error) {
    console.error('Error al subir la imagen:', error.message);
  }
}

// Llama a la función principal
main();

// Exporta la función para su uso en otro lugar
export async function getImageUrl() {
  return await main();
}

/**
 * Flujo Validador Estudiantes.
 * El sistema valida la identidad del Alumno.
 * En caso de encontrase devuelve lo solicitado, caso contrario lo envia al Flujo de Alumno Desconocido
 */
export const flujoValidadorAlumno = addKeyword(['Validador Alumnos'])
.addAnswer(`
Por favor, ingresá el DNI del Alumno/a 👩🏻🧑🏻 para validar su identidad en el sistema 🤖.
*Recordá que el mismo debe ser ingresado sin puntos por favor (11222333)*
`, {capture: true}, async (ctx, {gotoFlow, flowDynamic}) => {

  if (await validateDNI('files/alumnos/dni_alumnos.xlsx', '1a', ctx.body)) {
    const imageUrlResponse = await getImageUrl();
    flowDynamic({body: 'Aguarde un instante', media: 'https://3.bp.blogspot.com/--TbINrtKnXg/UtMHoGy28HI/AAAAAAAAY9s/3Hzmqd9xtpc/s1600/283888.jpg'})
  } else {
    await gotoFlow(barrel.barrelUsuariosDesconocidos.flujoAlumnoDesconocido)
  }
})
