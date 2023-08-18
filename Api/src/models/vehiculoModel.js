const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', // Referencia al modelo de perfil de piloto
    required: true
  },
  tipoVehiculoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoVehiculo', // Referencia al modelo de perfil de Tipo Vehiculo
    required: true
  },
    
  placa: String,
  modelo: String,
  año: Number,
  
  // Otros campos relevantes
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
