const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const storage = multer.memoryStorage(); // Almacenar archivos en memoria
const upload = multer({ storage: storage });
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET, IMAGE } = process.env;
const fs = require('fs')


const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  }
});

const uploadImageToS3 = async (req, res,file) => {
  try {
    

    const image = fs.createReadStream(file.pathFile)
    console.log(image);
    const userId = req.body;                                    
; // Acceder al archivo subido
    if (!file) {
      return res.status(400).json({ success: false, message: 'No se ha proporcionado ningún archivo.' });
    }
    
    // Nombre de archivo basado en el nombre de usuario o alguna lógica personalizada
    const imageFileName = `${userId}_perfil.png`; // Cambia la extensión según el formato de imagen

    // Subir la imagen a Amazon S3
    const putObjectCommand = new PutObjectCommand({
      Bucket: BUCKET, // Usa la variable BUCKET definida en tus variables de entorno
      Key: imageFileName,
      Body: image // Utiliza el buffer del archivo en lugar de decodificar datos base64
    });

    const uploadResult = await s3Client.send(putObjectCommand);

    return res.status(200).json({ success: true, message: 'Imagen subida exitosamente.' });
  } catch (error) {
    console.error('Error al subir la imagen a S3:', error);
    return res.status(500).json({ success: false, message: 'Error al subir la imagen a S3.' });
  }
};

module.exports = uploadImageToS3;
