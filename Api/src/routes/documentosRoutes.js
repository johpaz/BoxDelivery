const {Router}= require('express');

const createDocumentHandler = require('..//handler/documentHandler'); // Asumiendo que aquí está tu handler
const {createTipoDocumento} = require('../controllers/documentos/tipoDocumentoController');

const documentRouter = Router();
const documentTypeRouter = Router();

// Ruta para manejar la autenticación
documentRouter.post('/', createDocumentHandler);
documentTypeRouter.post('/', createTipoDocumento);

module.exports = {documentRouter,documentTypeRouter};
