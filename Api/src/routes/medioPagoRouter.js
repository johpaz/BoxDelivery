const {Router}= require('express');

const {createMedioPago} = require('../controllers/medosPago/mediosPagoController')
const {getAllMedioPago} = require('../controllers/medosPago/getMediosPago')


const medioPagoRouter = Router();

medioPagoRouter.post('/', createMedioPago);
medioPagoRouter.get('/', getAllMedioPago);


module.exports = {medioPagoRouter};