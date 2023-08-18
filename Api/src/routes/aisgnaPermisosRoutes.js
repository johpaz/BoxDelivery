const {Router}= require('express');

const assignPermissionsToProfileHandler = require('../handler/asignaPermisosHandler'); // Asumiendo que aquí está tu handler

const asignaPermisosRouter = Router();

// Ruta para manejar la autenticación
asignaPermisosRouter.post('/', assignPermissionsToProfileHandler);

module.exports = asignaPermisosRouter;
