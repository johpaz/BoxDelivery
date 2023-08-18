const PermissionAssignment = require('../../models/asignaPermisosModel');

const assignPermissionsToRole = async (roleId, permissionIds) => {
  try {
    const newPermissionAssignment = new PermissionAssignment({
      roleId: roleId,
      permissionIds: permissionIds
    });

    await newPermissionAssignment.save();

    return { success: true, message: 'Permisos asignados exitosamente.' };
  } catch (error) {
    return { success: false, message: 'Error al asignar permisos.' };
  }
};

module.exports = assignPermissionsToRole;
