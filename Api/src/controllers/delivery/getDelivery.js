const Delivery = require('../../models/deliveryModel'); // Importa tu modelo de servicio

async function obtenerTodosLosDeliveries(req, res) {
  try {
    const deliveries = await Delivery.find()
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los deliveries', error });
  }
}

module.exports = obtenerTodosLosDeliveries ;
