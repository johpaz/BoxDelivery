const {Router}= require('express');

const createPermissionHandler = require('..//handler/permisionHandler'); // Asumiendo que aquí está tu handler


const permissionRouter = Router();


permissionRouter.post('/', createPermissionHandler);

module.exports = permissionRouter;
