const createDelivery = require('../controllers/delivery/deliveryController');

const createDeliveryHandler = async (req, res) => {
  const {
    clienteId,
    ubicacionInicial,
    ubicacionDestino,
    tipoVehiculo,
    peso,
    pagaAlRecoger,
    valorAPagar,
    cobraAlEntregar,
    valorACobrar,
    mediosDePago,
    fotoRecoger,
    
  } = req.body;

  if (
    !clienteId ||
    !ubicacionInicial ||
    !ubicacionDestino ||
    !tipoVehiculo ||
    !peso ||
    pagaAlRecoger === undefined ||
    (pagaAlRecoger && valorAPagar === undefined) ||
    cobraAlEntregar === undefined ||
    (cobraAlEntregar && valorACobrar === undefined) ||
    !mediosDePago ||
    !fotoRecoger 
  ) {
    return res.status(400).json({ success: false, message: 'Faltan datos obligatorios.' });
  }

  try {
    const result = await createDelivery(
      clienteId,
      ubicacionInicial,
      ubicacionDestino,
      tipoVehiculo,
      peso,
      pagaAlRecoger,
      valorAPagar,
      cobraAlEntregar,
      valorACobrar,
      mediosDePago,
      fotoRecoger,
     );
     console.log(result);

    if (result.success) {
      res.status(200).json({ success: true, message: 'Servicio de entrega creado exitosamente.' });
    } else {
      res.status(400).json({ success: false, message: 'Error al crear el servicio de entrega.' });
    }
  } catch (error) {
    console.error('Error al crear el servicio de entrega:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
};

module.exports = createDeliveryHandler;
