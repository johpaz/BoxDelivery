  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require('bcrypt'); // Importa bcrypt
  const User = require('./src/models/userModel');

  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user._id });
    });
  });

  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
          return done(null, false, { message: 'Usuario no encontrado' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch);
        if (!passwordMatch) {
          return done(null, false, { message: 'Contraseña incorrecta' });
        }
        return done(null, user); // La autenticación es exitosa, devuelve el usuario
      } catch (error) {
        return done(error);
      }
    }
  ));

  module.exports = passport;
