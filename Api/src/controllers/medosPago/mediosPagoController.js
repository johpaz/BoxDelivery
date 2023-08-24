const MedioPago = require('../../models/medioPagoModel')

const createMedioPago = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const medioPago = new MedioPago({
      nombre,
      descripcion,
     
    });

    await  medioPago.save();

    res.status(201).json({ success: true, message: 'Medio de pago creado exitosamente.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear el Medio de pago.' });
  }
};

module.exports = {
  createMedioPago
};
