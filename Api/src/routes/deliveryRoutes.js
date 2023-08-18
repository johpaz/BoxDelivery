const {Router}= require('express');

const deliveryHandler = require('../handler/deliveryHandler'); // Asumiendo que aquí está tu handler
const obtenerTodosLosDeliveries = require('../controllers/delivery/getDelivery')
const obtenerDeliveryPorId = require('../controllers/delivery/getDeliveryId')
const tomarDelivery = require('../controllers/delivery/tomarDelivery')
const transitoDelivery= require('../controllers/delivery/transitoDelivery')
const entregadoDelivery= require('../controllers/delivery/entregadoDelivery')

const deliveryRouter = Router();
const transitoRouter = Router();
const entregadoRouter = Router();
// Ruta para manejar los deliveries

entregadoRouter.put('/:entregadoId', entregadoDelivery);
transitoRouter.put('/:transitoId', transitoDelivery);
deliveryRouter.put('/:deliveryId', tomarDelivery);
deliveryRouter.get('/:deliveryId', obtenerDeliveryPorId);
deliveryRouter.get('/', obtenerTodosLosDeliveries);
deliveryRouter.post('/', deliveryHandler);

module.exports = {deliveryRouter,transitoRouter,entregadoRouter};
