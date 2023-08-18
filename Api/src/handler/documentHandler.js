const createDocument = require('../controllers/documentos/documentosController');

const createDocumentHandler = async (req, res) => {
  const { profileId, tipoDocumento, fechaVencimiento, archivoAdjunto } = req.body;

  try {
    const result = await createDocument(profileId, tipoDocumento, fechaVencimiento, archivoAdjunto);

    if (result.success) {
      res.status(200).json({ success: true, message: 'Documento creado exitosamente.' });
    } else {
      res.status(400).json({ success: false, message: 'Error al crear el documento.' });
    }
  } catch (error) {
    console.error('Error al crear el documento:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
};

module.exports = createDocumentHandler;
