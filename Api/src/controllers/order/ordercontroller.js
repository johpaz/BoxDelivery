// Controlador para crear un pedido
const createOrder = async (req, res) => {
    try {
      const { userId, originAddress, destinationAddress, weight, length, height, width, declaredValue, priority } = req.body;
  
      const newOrder = new Order({
        userId,
        originAddress,
        destinationAddress,
        weight,
        length,
        height,
        width,
        declaredValue,
        priority
      });
  
      await newOrder.save();
      res.status(201).json({ message: 'Pedido creado exitosamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor.' });
    }
  };
  