const Delivery = require('../../models/deliveryModel'); // Importa tu modelo de delivery

// Función para que un piloto tome un delivery
async function transitoDelivery(req, res) {
  const { transitoId } = req.params;

  try {
    // Busca el delivery por su ID
    const delivery = await Delivery.findById(transitoId);

    if (!delivery) {
      return res.status(404).json({ message: 'Delivery no encontrado' });
    }

    // Verifica que el estado del delivery sea "asignado"
    if (delivery.estado !== 'asignado') {
      return res.status(400).json({ message: 'No se puede transito un delivery que no esté pendiente' });
    }

    // Cambia el estado del delivery a "asignado"
    delivery.estado = 'en_camino';

    // Guarda los cambios en la base de datos
    await delivery.save();

    res.status(200).json({ message: 'Delivery asignado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al transito el delivery', error });
  }
}

module.exports =  transitoDelivery
