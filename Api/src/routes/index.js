// app/routes/indexRoute.js
const {Router}= require('express');

const userRouter = require('./userloginRoutes');
const loginRouter = require('./loginRoutes')
const googleRouter = require('./googleRoutes2')
const {profileRouter,clienteRouter,pilotoRouter} = require('./profileRoutes')
const roleRouter = require('./roleRoutes')
const {vehiculoRouter,vehiculoTypeRouter,} = require('./vehiculoRoutes')
const {documentRouter,documentTypeRouter} = require('./documentosRoutes')
const permissionRouter = require('./permissionRoutes')
const asignaPermisosRouter = require('./aisgnaPermisosRoutes')
const {deliveryRouter,transitoRouter,entregadoRouter}= require('./deliveryRoutes')
const {medioPagoRouter} = require('./medioPagoRouter')
const loginGoogleRouter=require('./googleRoutes2');
const imageRouter = require('./imageRoutes')

router = Router();


router.use('/uploadImage', imageRouter);
router.use('/mediospago', medioPagoRouter);
router.use('/entrega', entregadoRouter);
router.use('/transito', transitoRouter);
router.use('/delivery', deliveryRouter);
router.use('/asignapermisos', asignaPermisosRouter);
router.use('/permisos', permissionRouter);
router.use('/tipovehiculo', vehiculoTypeRouter);
router.use('/tipodocumentos', documentTypeRouter);
router.use('/documentos', documentRouter);
router.use('/vehiculo', vehiculoRouter);
router.use('/role', roleRouter);
router.use('/profile', profileRouter);
router.use('/cliente', clienteRouter);
router.use('/piloto', pilotoRouter);
router.use('/auth', googleRouter);
router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/auth/google', loginGoogleRouter) //google



module.exports = router;
