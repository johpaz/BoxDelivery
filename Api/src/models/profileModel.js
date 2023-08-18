const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
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
  // Otros campos adicionales que puedas necesitar
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
