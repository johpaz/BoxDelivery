const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { sequelize } = require('../../db');
const { config } = require('dotenv');
config();

// Función para obtener todos los correos electrónicos de la base de datos
const allEmails = async () => {
  const allemails = await sequelize.query('SELECT email FROM "Users"');
  const emailsdb = [];

  for (var i = 0; i < allemails[0].length; i++) {
    const newEmail = allemails[0][i].email;
    emailsdb.push(newEmail);
  }
  return emailsdb;
};

// Función para obtener el usuario que inició sesión a través de Google
const loginUserGoogle = async (emailFromGoogle) => {
  const email = emailFromGoogle;
  const sql = await sequelize.query(`SELECT * FROM "Users" where email= '${email}'`);
  return sql[0][0].usuario;
};

/* // Función para obtener el ID de un cliente desde la tabla "Clients"
const tableClient = async (usuario, emailFromGoogle) => {
  const email = emailFromGoogle;
  const loginClient = await sequelize.query(`SELECT * FROM "Clients" WHERE "email"= '${email}'`);
  return loginClient[0][0].id;
};

// Función para obtener el ID de un profesional desde la tabla "Profesionals"
const tableProf = async (usuario, emailFromGoogle) => {
  const email = emailFromGoogle;
  const loginProf = await sequelize.query(`SELECT * FROM "Profesionals" WHERE "email"= '${email}'`);
  return loginProf[0][0].id;
};

// Función para obtener el ID de un administrador desde la tabla "Users"
const tableAdmi = async (usuario, emailFromGoogle) => {
  const email = emailFromGoogle;
  const adminis = await sequelize.query(`SELECT * FROM "Users" WHERE "email"= '${email}'`);
  return adminis[0][0].id;
};
 */
// Función de ejecución principal para la estrategia de autenticación de Google
const execute = async (accessToken, refreshToken, profile, done) => {
  const emails = await allEmails();

  const response = emails.includes(profile.emails[0].value);

  if (response) {
    console.log('Usuario registrado: ', profile.displayName);

    const emailFromGoogle = profile.emails[0].value;
    const usuario = await loginUserGoogle(emailFromGoogle);
    console.log('Tipo de usuario: ', usuario);

    let id;
    if (usuario == 'c') {
      id = await tableClient(usuario, emailFromGoogle);
    } else if (usuario == 'p') {
      id = await tableProf(usuario, emailFromGoogle);
    } else if (usuario == 'a') {
      id = await tableAdmi(usuario, emailFromGoogle);
    }

    const userData = {
      usuario: usuario,
      id: id,
    };
    done(null, userData);
  } else {
    console.log('Correo no registrado en la base de datos');
    done(null, 'El correo electrónico seleccionado no se encuentra registrado.');
  }
};

const authgoogle = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3004/auth/google', // URL de redireccionamiento después de la autenticación
  },
  execute
);

module.exports = authgoogle;
