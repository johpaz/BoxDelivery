const User = require('../../models/userModel');
const jwt = require('jsonwebtoken'); // Asegúrate de tener instalado el paquete 'jsonwebtoken'

exports.createLocalUser = async (req, res, next) => {
  try {
    const { email, password, userType } = req.body;

    // Validar que los campos obligatorios estén presentes
    if (!email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Validar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    try {
      
      const piloto = "Piloto"
      // Determina el tipo de usuario
      let userType = piloto ? 'piloto' : 'cliente';

      
      // Determina la ruta de redirección
      let redirectPath = userType === 'piloto' ? '/FormPiloto' : '/FormClient';

      // Crear un nuevo usuario con los detalles proporcionados
      const newUser = new User({ email, password });
      console.log(newUser);
      await newUser.save();
      
      // Generar el token de acceso
      const accessToken = jwt.sign({ userId: newUser._id, userType },'clave-secreta-del-token', { expiresIn: '1h' });

      // Enviar el token de acceso, el tipo de usuario y el mensaje de éxito al cliente
      return res.status(200).json({ success: true, userType, accessToken, redirectPath, message: "Session Iniciada" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};
