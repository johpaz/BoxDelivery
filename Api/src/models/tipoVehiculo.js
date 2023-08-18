const mongoose = require('mongoose');

const tipoVehiculoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  descripcion: {
    type: String
  },
  capacidadCarga: {
    type: String
  },
  capacidadCargaKilos: {
    type: Number,
    required: true
  }
});

const TipoVehiculo = mongoose.model('TipoVehiculo', tipoVehiculoSchema);

module.exports = TipoVehiculo;
