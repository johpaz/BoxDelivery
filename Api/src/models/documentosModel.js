const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', // Referencia al modelo de perfil de profile
    required: true
  },
  tipoDocumento: {
    type: String,
    required: true
  },
  fechaVencimiento: {
    type: Date,
    required: true
  },
  archivoAdjunto: String, // Puede ser una URL o referencia al archivo
  // Otros campos relevantes
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
