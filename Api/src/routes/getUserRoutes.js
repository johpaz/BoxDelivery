const {Router}= require('express');

const {getAllUser} = require('../handlers/authHandler'); // Asumiendo que aquí está tu handler

const authRouter = Router();

// Ruta para manejar la autenticación
authRouter.get('/', getAllUser);

module.exports = authRouter;
