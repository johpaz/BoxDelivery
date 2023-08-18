const Delivery = require('../../models/deliveryModel'); // Importa tu modelo de delivery

// Función para obtener los detalles de un delivery por su ID
async function obtenerDeliveryPorId(req, res) {
  const { deliveryId } = req.params;

  try {
    const delivery = await Delivery.findById(deliveryId);
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery no encontrado' });
    }

    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el delivery', error });
  }
}

module.exports = obtenerDeliveryPorId

