const TipoVehiculo = require('..//../models/tipoVehiculo');

exports.getAllTipoVehiculo = async (req, res) => {
  try {
    const tipoVehiculos = await TipoVehiculo.find();
    res.status(200).json(tipoVehiculos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
};
