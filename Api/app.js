const crypto = require('crypto');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db');
const passportConfig = require('./passport-config'); // Importar la configuración de Passport
const googleAuthConfig = require('./google-auth-conf'); // Importar la configuración de Google Authentication
const index = require('./src/routes/index');
const fileUpload = require('express-fileupload')
const multer = require('multer');
const bodyParser = require("body-parser");


const app = express();

// Conectar a la base de datos
connectDB();

// Generar una clave secreta aleatoria
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Secret Key:', secretKey);


// Configuración de Multer
const storage = multer.memoryStorage(); // Almacenar archivos en memoria
const upload = multer({ storage: storage });

// Configuración general
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));
// Configura body-parser con un límite de 10 MB (ajusta según tus necesidades)
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// Configuración de Passport y Google Authentication
app.use(passportConfig.initialize());
app.use(passportConfig.session());

// Configuración de Google Authentication
app.use(googleAuthConfig.initialize());
app.use(googleAuthConfig.session());

//Mildelware

app.use(fileUpload())


// Rutas
app.use('/', index);
// Iniciar servidor
const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
