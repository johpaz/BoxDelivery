const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isBanned: {
    type: Boolean,
    default: false // Por defecto, el usuario no está baneado
  }
});

module.exports = mongoose.model('User', userSchema);
