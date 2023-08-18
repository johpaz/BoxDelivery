const Vehicle = require('../../models/vehiculoModel');


const createVehicle = async (profileId, tipoVehiculoId, placa, modelo, año) => {
  try { console.log(profileId);
    // Validar que todos los campos requeridos estén presentes
    if (!profileId || !tipoVehiculoId || !placa || !modelo || !año) {
      return { success: false, message: 'Todos los campos son obligatorios.' };
    }

    // Crear el nuevo vehículo
    const newVehicle = new Vehicle({
      profileId: profileId, // Usar el profileId del perfil como profileId
      tipoVehiculoId: tipoVehiculoId,
      placa: placa,
      modelo: modelo,
      año: año
    });

    // Guardar el vehículo en la base de datos
    await newVehicle.save();

    return { success: true, message: 'Vehículo creado exitosamente.' };
  } catch (error) {
    return { success: false, message: 'Error al crear el vehículo.' };
  }
};

module.exports = createVehicle;
