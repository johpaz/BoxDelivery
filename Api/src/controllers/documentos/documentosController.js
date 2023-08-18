const Document = require('..//../models/documentosModel');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET } = process.env;


const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: 'AKIAQB4OIPZDHMEOWGUU',
    secretAccessKey: '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'
  }
});


const createDocument = async (profileId, tipoDocumento, fechaVencimiento, archivoAdjunto) => {
  try {
    // Decodificar la imagen base64 a un buffer de datos
    const imageBuffer = Buffer.from(archivoAdjunto, 'base64');

    // Generar un nombre único para el archivo en S3
    const archivoKey = `documentos/${Date.now()}_${profileId}_${tipoDocumento}.png`;

      // Subir la imagen a Amazon S3
      const putObjectCommand = new PutObjectCommand({
        Bucket: 'jpcode',
        Key: archivoKey,
        Body: imageBuffer
      });

      const uploadResult = await s3Client.send(putObjectCommand);
    console.log(uploadResult);

  
    // Crear el nuevo documento en la base de datos
    const newDocument = new Document({
      profileId: profileId,
      tipoDocumento: tipoDocumento,
      fechaVencimiento: fechaVencimiento,
      archivoAdjunto: archivoKey // Guardamos la URL del archivo en S3
    });

    await newDocument.save();

    return { success: true, message: 'Documento creado exitosamente.' };
  } catch (error) {
    return { success: false, message: 'Error al crear el documento.' };
  }
};

module.exports = createDocument;
