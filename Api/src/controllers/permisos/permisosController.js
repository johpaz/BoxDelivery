const Permission = require('../../models/permissionModel');

const createPermission = async (name, description) => {
  try {
    console.log(name,description);
    const newPermission = new Permission({
      name: name,
      description: description
    });
    console.log(newPermission);

    await newPermission.save();

    return { success: true, message: 'Permiso creado exitosamente.' };
  } catch (error) {
    return { success: false, message: 'Error al crear el permiso.' };
  }
};

module.exports = createPermission;
