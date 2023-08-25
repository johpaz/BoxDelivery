const mongoose = require('mongoose');

const clienteProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  profileImage: String,
  email: String,
  phone: String,
  address: String,
  rating: {
    type: Number,
    default: 0 // Puedes establecer un valor predeterminado para el rating
  },
  // Otros campos adicionales que puedas necesitar para el perfil del cliente
});

const ClienteProfile = mongoose.model('ClienteProfile', clienteProfileSchema);

module.exports = ClienteProfile;
