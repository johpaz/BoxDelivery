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
  name: String,
  profileImage: String,
  phone: String,
  address: String,
  rating: {
    type: Number,
    default: 5 
  },
    // Otros campos adicionales que puedas necesitar para el perfil del cliente
});

const ClienteProfile = mongoose.model('ClienteProfile', clienteProfileSchema);

module.exports = ClienteProfile;
