const TipoVehiculo = require('..//..//models/tipoVehiculo');

const createTipoVehiculo = async (req, res) => {
  const { nombre, descripcion,capacidadCarga,capacidadCargaKilos } = req.body;

  try {
    const tipoVehiculo = new TipoVehiculo({
      nombre,
      descripcion,
      capacidadCarga,
      capacidadCargaKilos
    });

    await tipoVehiculo.save();

    res.status(201).json({ success: true, message: 'Tipo de vehículo creado exitosamente.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear el tipo de vehículo.' });
  }
};

module.exports = {
  createTipoVehiculo
};
