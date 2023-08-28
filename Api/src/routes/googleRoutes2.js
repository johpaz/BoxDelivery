const {Router}= require('express');

const {saveUserFromGoogleToken} = require('../controllers/users/googleAuthController'); // Asumiendo que aquí está tu handler


// Ruta para manejar la autenticación
const googleRouter = Router();


googleRouter.post('/', saveUserFromGoogleToken);


module.exports = googleRouter;
