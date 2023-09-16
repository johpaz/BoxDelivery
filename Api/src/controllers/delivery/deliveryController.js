const Delivery = require('../../models/deliveryModel');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const calcularDistancia = require('./calcularDistancia'); // Asegúrate de tener la ruta correcta
const calcularValorDelivery= require('./ValorDelivery')
require('dotenv').config();
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET, IMAGE } = process.env;


const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
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
       Bucket: BUCKET,
       Key: imageFileName,
       Body: imageBuffer
     });
     
     const uploadResult = await s3Client.send(putObjectCommand);
     const ubicacionInicialObj = {
      lat: ubicacionInicial[0], // El primer elemento es la latitud
      lon: ubicacionInicial[1], // El segundo elemento es la longitud
    };
    const ubicacionDestinoObj = {
      lat: ubicacionDestino[0],
      lon: ubicacionDestino[1],
    };

    const newDelivery = new Delivery({
      clienteId: clienteId,
      ubicacionInicial: ubicacionInicialObj,
      ubicacionDestino: ubicacionDestinoObj,
      tipoVehiculo: tipoVehiculo,
      peso: peso,
      pagaAlRecoger: pagaAlRecoger,
      valorAPagar: valorAPagar,
      cobraAlEntregar: cobraAlEntregar,
      valorACobrar: valorACobrar,
      mediosDePago: mediosDePago,
      fotoRecoger: `https://gofleet.s3.amazonaws.com/${imageFileName}`,
      distanciaRecorrer: distancia, // Agrega el valor calculado de la distancia
      valorPorDistancia: valorDistancia,
      valorDelivery: valorDelivery
     
    }); console.log(newDelivery);
    
    
    await newDelivery.save();
    
  // Ahora puedes acceder al _id
    const id = newDelivery._id;
    console.log(id);   
    
    return { success: true, message: 'Servicio de entrega creado exitosamente.',id,valorPorDistancia:valorDistancia,valorDelivery};
  } catch (error) {
    return { success: false, message: 'Error al crear el servicio de entrega.' };
  }
};

module.exports = createDelivery;
