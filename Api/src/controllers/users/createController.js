const User = require('../../models/userModel');
const jwt = require('jsonwebtoken'); // Asegúrate de tener instalado el paquete 'jsonwebtoken'
const { isValidEmail, isValidPassword } = require('../utils/validation'); // Importa las funciones de validación

exports.createLocalUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    // Validar que el email no esté vacío
    if (!email) {
      return res.status(400).json({ message: 'El campo de correo electrónico es obligatorio' });
    }

    // Validar que el formato del email sea válido
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'El formato del correo electrónico es inválido' });
    }

    // Validar que la contraseña no esté vacía
    if (!password) {
      return res.status(400).json({ message: 'El campo de contraseña es obligatorio' });
    }
    //Validar que la contraseña cumple con ciertos requisitos de complejidad
    if (!isValidPassword(password)) {
      return res.status(400).json({ message: 'La contraseña no cumple con los requisitos de complejidad' });
    }

    // Validar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario con los detalles proporcionados
    const newUser = new User({ email, password });
    console.log(newUser)
    await newUser.save();

    // Generar el token de acceso
    const accessToken = jwt.sign({ userId: newUser._id }, 'clave-secreta-del-token', { expiresIn: '1h' });

    // Determinar la ruta de redirección
    const redirectPath = '/FormClient';

    
    // Enviar el token de acceso, el tipo de usuario y el mensaje de éxito al cliente
    return res.status(200).json({ success: true, accessToken, id:newUser._id, redirectPath, message: "Sesión iniciada"  });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};
