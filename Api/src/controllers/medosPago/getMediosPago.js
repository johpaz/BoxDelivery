const MedioPago = require('..//../models/medioPagoModel');

exports.getAllMedioPago = async (req, res) => {
  try {
    const medioPagos = await MedioPago.find();
    res.status(200).json(medioPagos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
};
