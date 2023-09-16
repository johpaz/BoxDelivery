const {Router}= require('express');

const {createLocalUser} = require('../controllers/users/createController'); // Asumiendo que aquí está tu handler
const {getAllUsers} = require('../controllers/users/getUserController')


// Ruta para manejar la autenticación

const userRouter = Router();

userRouter.post('/', createLocalUser);
userRouter.get('/',  getAllUsers);

module.exports = userRouter;
