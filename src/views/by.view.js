import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flujoAdios = addKeyword(['Adios'])
.addAnswer('Gracias por utilizar nuestro nuevo asistente virtual 🤖. Para futuras consultas por favor digite y envie el mensaje *Hola* para recibir nuestra asistencia nuevamente.');

