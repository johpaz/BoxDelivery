const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const Profile = require('../../models/profileModel');
const user = require('../../models/userModel');
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET, IMAGE } = process.env;

const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: 'AKIAQB4OIPZDHMEOWGUU',
    secretAccessKey: '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'
  }
});

const createProfileWithImage = async (userId, role, profileImage, email, phone, address,user) => {
  try {
    // Decodificar la imagen base64 a un buffer de datos
    const imageBuffer = Buffer.from(profileImage, 'base64');
     // Nombre de archivo basado en el nombre de usuario
     const imageFileName = `${userId}_perfil.png`;; // Cambiar la extensión según el formato de imagen

    // Subir la imagen a Amazon S3
    const putObjectCommand = new PutObjectCommand({
      Bucket: 'jpcode',
      Key: imageFileName,
      Body: imageBuffer
    });

    const uploadResult = await s3Client.send(putObjectCommand);
    
    // Crear el perfil en la base de datos
    const newProfile = new Profile({
      user: userId,
      role: role,
      profileImage:`https://jpcode.s3.amazonaws.com/${imageFileName}` ,
      email: email,
      phone: phone,
      address: address
      // Otros campos de perfil
    });

    await newProfile.save();
    
    return { success: true, message: 'Perfil creado exitosamente.' };
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    return { success: false, message: 'Error al crear el perfil.' };
  }
};

module.exports = createProfileWithImage;
