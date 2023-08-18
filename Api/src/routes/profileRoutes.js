const {Router}= require('express');

const {handleCreateProfile,validateCreateProfile} = require('../handler/profieHandler'); // Asumiendo que aquí está tu handler

const profileRouter = Router();

// Ruta para manejar la autenticación
profileRouter.post('/', handleCreateProfile);

module.exports = profileRouter;
