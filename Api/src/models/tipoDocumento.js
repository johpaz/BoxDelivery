const mongoose = require('mongoose');

const tipoDocumentoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  descripcion: {
    type: String
  }
});

const TipoDocumento = mongoose.model('TipoDocumento', tipoDocumentoSchema);

module.exports = TipoDocumento;
