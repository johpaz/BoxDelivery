const passport = require('passport');
const jwt = require('jsonwebtoken'); // Asegúrate de tener instalado el paquete 'jsonwebtoken'
const PilotoProfile = require('../../models/pilotoModel'); // Asegúrate de importar el modelo Piloto

exports.login = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Error de autenticación' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    try {
      // Consulta en la tabla Piloto si existe el userId
      const piloto = await PilotoProfile.findOne({ user: user._id });

      // Determina el tipo de usuario
      let userType = piloto ? 'piloto' : 'cliente';

      // Generar el token de acceso
      const accessToken = jwt.sign({ userId: user._id, userType }, 'clave-secreta-del-token', { expiresIn: '1h' });
      // Determina la ruta de redirección
      let redirectPath = userType === 'piloto' ? '/dashboardPiloto' : '/dashboardClient';

      // Enviar el token de acceso, el tipo de usuario y el mensaje de éxito al cliente
      return res.status(200).json({ success: true, userType, accessToken,redirectPath, message:"Session Iniciada" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
  })(req, res, next);
};
