const createPermission = require('../controllers/permisos/permisosController');

const createPermissionHandler = async (req, res) => {
  const { name, description } = req.body;
  
  try {
    const result = await createPermission(name, description);
    console.log(result);
    if (result.success) {
      res.status(200).json({ success: true, message: 'Permiso creado exitosamente.' });
    } else {
      res.status(400).json({ success: false, message: 'Error al crear el permiso.' });
    }
  } catch (error) {
    console.error('Error al crear el permiso:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
};

module.exports = createPermissionHandler;
