const assignPermissionsToRole = require('..//controllers/asignaPermisos/asignaPermisosController');

const assignPermissionsHandler = async (req, res) => {
  const { roleId, permissionIds } = req.body;

  try {
    const result = await assignPermissionsToRole(roleId, permissionIds);

    if (result.success) {
      res.status(200).json({ success: true, message: 'Permisos asignados exitosamente.' });
    } else {
      res.status(400).json({ success: false, message: 'Error al asignar permisos.' });
    }
  } catch (error) {
    console.error('Error al asignar permisos:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
};

module.exports = assignPermissionsHandler;
