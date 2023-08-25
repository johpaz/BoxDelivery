const mongoose = require('mongoose');

const pilotoProfileSchema = new mongoose.Schema({
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
  name:String,
  profileImage: String,
  email: String,
  phone: String,
  address: String,
  isPiloto: Boolean,
  rating: {
    type: Number,
    default: 5 
  },
  lat: {
    type: Number,
    default: null,
  },
  lon: {
    type: Number,
    default: null,
  },
  // Otros campos adicionales que puedas necesitar para el perfil del piloto
});

const PilotoProfile = mongoose.model('PilotoProfile', pilotoProfileSchema);

module.exports = PilotoProfile;
