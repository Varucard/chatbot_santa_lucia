import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flujoMenuPrincipal = addKeyword(['/^\d{7,8}$/'])
.addAnswer(['Por favor, seleccione el Sector al que le gustaria acceder'],
{
  capture: true,
  buttons: [{body: 'Secretaria'}, {body: 'Secundaria'}, {body: 'Primaria'}],
}, async (ctx) => {
  console.log(ctx.body);
})
