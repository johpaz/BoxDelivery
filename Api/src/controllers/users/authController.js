const passport = require('passport');

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Error de autenticación' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error de autenticación' });
      }
      return res.status(200).json({ user });
    });
  })(req, res, next);
};
