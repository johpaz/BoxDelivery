const createVehicle = require('../controllers/vehiculo/vehiculoController');

const createVehicleHandler = async (req, res) => {
  const { profileId, tipoVehiculoId, placa, modelo, año } = req.body;
  console.log(tipoVehiculoId);
  try {
    const result = await createVehicle(profileId, tipoVehiculoId, placa, modelo, año);
    
    if (result.success) {
      res.status(200).json({ success: true, message: 'Vehículo creado exitosamente.' });
    } else {
      res.status(400).json({ success: false, message: 'Error al crear el vehículo.' });
    }
  } catch (error) {
    console.error('Error al crear el vehículo:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
};

module.exports = createVehicleHandler;
