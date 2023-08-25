const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const Profile = require('../../models/profileModel');
const user = require('../../models/userModel');
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET, IMAGE } = process.env;

const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: `${ACCESS_KEY_ID}`,
    secretAccessKey: `${SECRET_ACCESS_KEY}`
  }
});

// ... (importaciones y configuraciones)

const createProfileWithImage = async (userId, role, profileImage, email, phone, address, isPiloto) => {
    try {
      // Decodificar la imagen base64 a un buffer de datos
      const imageBuffer = Buffer.from(profileImage, 'base64');
      // Nombre de archivo basado en el nombre de usuario
      const imageFileName = `${userId}_perfil.png`;; // Cambiar la extensión según el formato de imagen
  
      // Subir la imagen a Amazon S3
      const putObjectCommand = new PutObjectCommand({
        Bucket: BUCKET, // Usa la variable BUCKET definida en tus variables de entorno
        Key: imageFileName,
        Body: imageBuffer
      });
  
      const uploadResult = await s3Client.send(putObjectCommand);
  
      let newProfile;
  
      // Si el rol es piloto, crea el perfil en el modelo PilotoProfile
      if (isPiloto) {
        newProfile = new PilotoProfile({
          user: userId,
          role: role,
          profileImage: `https://${BUCKET}.s3.amazonaws.com/${imageFileName}`,
          email: email,
          phone: phone,
          address: address,
          rating: 0 // Establece el rating inicial a 0
        });
      } else {
        // Si el rol es cliente, crea el perfil en el modelo ClienteProfile
        newProfile = new ClienteProfile({
          user: userId,
          role: role,
          profileImage: `https://${BUCKET}.s3.amazonaws.com/${imageFileName}`,
          email: email,
          phone: phone,
          address: address,
          rating: 0 // Establece el rating inicial a 0
        });
      }
  
      await newProfile.save();
  
  
      return { success: true, message: 'Perfil creado exitosamente.' };
    } catch (error) {
      console.error('Error al crear el perfil:', error);
      return { success: false, message: 'Error al crear el perfil.' };
    }
  };
  
module.exports = createProfileWithImage;
