const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isBanned: {
    type: Boolean,
    default: false
  },
  refreshToken: String, // Token de actualización para la persistencia de sesión
  lastLogin: Date,     // Fecha y hora del último inicio de sesión
});

module.exports = mongoose.model('User', userSchema);
