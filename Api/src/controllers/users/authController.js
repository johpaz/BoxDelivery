const passport = require('passport');
const jwt = require('jsonwebtoken'); // Asegúrate de tener instalado el paquete 'jsonwebtoken'
const PilotoProfile = require('../../models/pilotoModel'); // Asegúrate de importar el modelo Piloto
const ClienteProfile = require('../../models/clienteModel')

exports.login = async (req, res, next) => {
  console.log(req.email);
  passport.authenticate('local', async (err, user, info) => {
    console.log(user);
    if (err) {
      return res.status(500).json({ error: 'Error de autenticación' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    try {
      // Consulta en la tabla Piloto si existe el userId
      
      
      const cliente = await ClienteProfile.findOne({ user: user._id });
      const piloto = cliente ? null : await PilotoProfile.findOne({ user: user._id });

      let userType;
      let pilotoId;
      let clienteId;

      if (cliente) {
        userType = 'cliente';
        clienteId = cliente._id;
      } else if (piloto) {
        userType = 'piloto';
        pilotoId = piloto._id;
      } 

      
      
      let profileImage = '';

      if (piloto && piloto.profileImage) {
        profileImage = piloto.profileImage;
      } else if (cliente && cliente.profileImage) {
        profileImage = cliente.profileImage;
      }
      
      // Generar el token de acceso
      const accessToken = jwt.sign({ userId: user._id, userType }, 'clave-secreta-del-token', { expiresIn: '1h' });
      // Determina la ruta de redirección
      let redirectPath = userType === 'piloto' ? '/dashboardPiloto' : '/dashboardClient';

      // Enviar el token de acceso, el tipo de usuario y el mensaje de éxito al cliente
      return res.status(200).json({ success: true, id:user._id,userType, accessToken,redirectPath, profileImage:profileImage, message:"Session Iniciada",clienteId,pilotoId });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
  })(req, res, next);
};
