const Delivery = require('../../models/deliveryModel'); // Importa tu modelo de delivery
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');


const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: 'AKIAQB4OIPZDHMEOWGUU',
    secretAccessKey: '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'
  }
});

async function entregadoDelivery(req, res) {
  const { entregadoId } = req.params;
  const {fotoEntrega} =req.body;

  // Decodificar la imagen base64 a un buffer de datos
 const imageBuffer = Buffer.from(fotoEntrega, 'base64');
 // Nombre de archivo basado en el nombre de usuario
 const imageFileName = `${entregadoId}_entregado.png`;; // Cambiar la extensión según el formato de imagen

// Subir la imagen a Amazon S3
const putObjectCommand = new PutObjectCommand({
  Bucket: 'jpcode',
  Key: imageFileName,
  Body: imageBuffer
});
  try {
    // Busca el delivery por su ID
    const delivery = await Delivery.findById(entregadoId);

    if (!delivery) {
      return res.status(404).json({ message: 'Delivery no encontrado' });
    }

    // Verifica que el estado del delivery sea "asignado"
    if (delivery.estado !== 'en_camino') {
      return res.status(400).json({ message: 'No se puede entregado un delivery que no esté pendiente' });
    }

    // Cambia el estado del delivery a "asignado"
    delivery.fotoEntrega = `https://jpcode.s3.amazonaws.com/${imageFileName}`,
    delivery.estado = 'entregado';
    

    // Guarda los cambios en la base de datos
    await delivery.save();

    res.status(200).json({ message: 'Delivery asignado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al entregado el delivery', error });
  }
}

module.exports =  entregadoDelivery
