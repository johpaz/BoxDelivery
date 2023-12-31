require('dotenv').config();
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const PilotoProfile = require('../../models/pilotoModel');
const ClienteProfile = require('../../models/clienteModel')
const user = require('../../models/userModel');
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET, IMAGE } = process.env;


const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  }
});
// ... (importaciones y configuraciones)

const createProfileWithImage = async (userId,name, role, profileImage, email, phone, address, isPiloto) => {
  
  try {
   // Decodificar la imagen base64 a un buffer de datos
   const imageBuffer = Buffer.from(profileImage, 'base64');

    console.log(imageBuffer);
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

    if (isPiloto) {
      newProfile = new PilotoProfile({
        name:name,
        user: userId,
        role: role,
        isPiloto: isPiloto,
        profileImage: `https://${BUCKET}.s3.amazonaws.com/${imageFileName}`,
        email: email,
        phone: phone,
        address: address,
        rating: 5 // Establece el rating inicial a 0
      });
    } else {
      // Si el rol es cliente, crea el perfil en el modelo ClienteProfile
      newProfile = new ClienteProfile({
        name:name,
        user: userId,
        role: role,
        profileImage: `https://${BUCKET}.s3.amazonaws.com/${imageFileName}`,
        email: email,
        phone: phone,
        address: address,
        rating: 5 // Establece el rating inicial a 0
      });
    }

    await newProfile.save();
    
    // Asignar el rol de piloto si es necesario
    if (isPiloto) {
      await user.findByIdAndUpdate(userId, { $set: { isPiloto: true } });
      userType= 'piloto'
      redirectPath = '/DashboardPiloto'
      // Obtener el pilotoId después de guardar el perfil
      const pilotoProfile = await PilotoProfile.findOne({ user: userId });
      const pilotoId = pilotoProfile._id;
    } else{
    const userType='cliente'
    const redirectPath = '/DashboardClient'
    const clienteProfile = await ClienteProfile.findOne({ user: userId });
    const clientId = clienteProfile._id;
    }
    return {
      success: true,
      userType,
      profileImage: newProfile.profileImage,
      redirectPath,
      message: 'Perfil creado exitosamente.',
      clientId, // Agregar clientId o pilotoId según corresponda
      pilotoId // Agregar pilotoId o clientId según corresponda
    };
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    return { success: false, message: 'Error al crear el perfil.' };
  }
};

module.exports = createProfileWithImage;
