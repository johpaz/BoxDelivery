// permissionsHelper.js
const Role = require('../models/roleModel'); // Importa el modelo de roles

const checkRolePermissions = async (roleId, requiredPermissions) => {
  try {
    // Obtiene el rol desde la base de datos
    const role = await Role.findById(roleId);

    // Verifica si el rol tiene los permisos requeridos
    const hasRequiredPermissions = role.permissions.some(permission => requiredPermissions.includes(permission));

    return hasRequiredPermissions;
  } catch (error) {
    console.error('Error al verificar los permisos del rol:', error);
    return false;
  }
};

module.exports = { checkRolePermissions };
