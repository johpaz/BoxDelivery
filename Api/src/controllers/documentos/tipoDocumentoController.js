const TipoDocumento = require('..//../models/tipoDocumento');

const createTipoDocumento = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const tipoDocumento = new TipoDocumento({
      nombre,
      descripcion
    });

    await tipoDocumento.save();

    res.status(201).json({ success: true, message: 'Tipo de documento creado exitosamente.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear el tipo de documento.' });
  }
};

module.exports = {
  createTipoDocumento
};
