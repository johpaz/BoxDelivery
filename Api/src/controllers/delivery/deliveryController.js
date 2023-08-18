const Delivery = require('../../models/deliveryModel');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const calcularDistancia = require('./calcularDistancia'); // Asegúrate de tener la ruta correcta
const calcularValorDelivery= require('./ValorDelivery')
require('dotenv').config();

const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: 'AKIAQB4OIPZDHMEOWGUU',
    secretAccessKey: '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'
  }
});


const createDelivery = async (clienteId, ubicacionInicial, ubicacionDestino,tipoVehiculo, peso, pagaAlRecoger, valorAPagar, cobraAlEntregar, valorACobrar, mediosDePago, fotoRecoger) => {
  try {
      

      // Calcular la distancia utilizando la función calcularDistancia
      const distancia = await calcularDistancia(ubicacionInicial, ubicacionDestino);

      //calcuar el valor del envio
      const valorDistancia=  distancia *  parseFloat(process.env.TARIFA_POR_KILOMETRO)
      const valorDelivery = await calcularValorDelivery(  valorACobrar, valorAPagar,valorDistancia);
    

      // Decodificar la imagen base64 a un buffer de datos
      const imageBuffer = Buffer.from(fotoRecoger, 'base64');
      // Nombre de archivo basado en el nombre de usuario
      const imageFileName = `${clienteId}_recogida.png`;; // Cambiar la extensión según el formato de imagen
 
     // Subir la imagen a Amazon S3
     const putObjectCommand = new PutObjectCommand({
       Bucket: 'jpcode',
       Key: imageFileName,
       Body: imageBuffer
     });
     
     const uploadResult = await s3Client.send(putObjectCommand);
     

    const newDelivery = new Delivery({
      clienteId: clienteId,
      ubicacionInicial: ubicacionInicial,
      ubicacionDestino: ubicacionDestino,
      tipoVehiculo: tipoVehiculo,
      peso: peso,
      pagaAlRecoger: pagaAlRecoger,
      valorAPagar: valorAPagar,
      cobraAlEntregar: cobraAlEntregar,
      valorACobrar: valorACobrar,
      mediosDePago: mediosDePago,
      fotoRecoger: `https://jpcode.s3.amazonaws.com/${imageFileName}`,
      distanciaRecorrer: distancia, // Agrega el valor calculado de la distancia
      valorPorDistancia: valorDistancia,
      valorDelivery: valorDelivery
     
    });
  
    await newDelivery.save();

    return { success: true, message: 'Servicio de entrega creado exitosamente.' };
  } catch (error) {
    return { success: false, message: 'Error al crear el servicio de entrega.' };
  }
};

module.exports = createDelivery;
