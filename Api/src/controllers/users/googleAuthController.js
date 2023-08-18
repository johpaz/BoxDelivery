const User = require('..//../models/userModel'); // Importa el modelo de usuario definido

async function saveUserFromGoogleToken(req, res) {
  try {
    const { googleToken } = req.body; // Obtiene el token de Google del cuerpo de la solicitud

    // Aquí puedes verificar y validar el token de Google
    // Utiliza la biblioteca de verificación de Google o cualquier método adecuado
    
    // Decodifica el token y extrae la información del usuario
    const decodedToken = decodeGoogleToken(googleToken);

    // Crea un nuevo usuario con los datos extraídos del token de Google
    const newUser = new User({
      // Aquí asigna los campos del usuario según lo que extraigas del token
      // Por ejemplo: name, email, picture, etc.
    });

    // Guarda el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { saveUserFromGoogleToken };
