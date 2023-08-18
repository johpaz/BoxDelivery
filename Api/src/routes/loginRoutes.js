const {Router}= require('express');
const {login}= require('../controllers/users/authController')


const loginRouter = Router();

loginRouter.post('/', login);

module.exports = loginRouter;
