const {Router}= require('express');

const createRole = require('../controllers/roles/roleController'); // Asumiendo que aquí está tu handler

const roleRouter = Router();

// Ruta para manejar la autenticación
roleRouter.post('/', createRole);

module.exports = roleRouter;
