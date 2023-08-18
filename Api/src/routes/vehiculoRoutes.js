const {Router}= require('express');

const createVehicleHandler= require('../handler/vehiculoHandler'); // Asumiendo que aquí está tu handler
const {createTipoVehiculo} = require('../controllers/vehiculo/tipoVehiculoController'); 


const vehiculoRouter = Router();
const vehiculoTypeRouter = Router();

// Ruta para manejar la autenticación
vehiculoRouter.post('/', createVehicleHandler);
vehiculoTypeRouter.post('/', createTipoVehiculo);


module.exports = {vehiculoRouter,vehiculoTypeRouter};
