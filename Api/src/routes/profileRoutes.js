const {Router}= require('express');

const {handleCreateProfile,validateCreateProfile} = require('../handler/profieHandler'); 
const {getAllProfiles,getAllPilotos,getAllClientes} = require('../controllers/profile/getProfiles'); 
const updatePiloto = require('../controllers/profile/updatePiloto')

const profileRouter = Router();
const clienteRouter = Router();
const pilotoRouter = Router();

// Ruta para manejar la autenticación
profileRouter.post('/', handleCreateProfile);
profileRouter.get('/', getAllProfiles);
clienteRouter.get('/', getAllClientes)
pilotoRouter.get('/', getAllPilotos)
pilotoRouter.put('/:id', updatePiloto)

module.exports = {
    profileRouter,
    clienteRouter,
    pilotoRouter
 };
