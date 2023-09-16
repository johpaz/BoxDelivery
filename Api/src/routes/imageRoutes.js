const {Router}= require('express');

const uploadImageToS3 = require('../controllers/image/imageController'); // Asumiendo que aquí está tu handler


// Ruta para manejar la autenticación
const imageRouter = Router();


imageRouter.post('/', uploadImageToS3);


module.exports = imageRouter;
