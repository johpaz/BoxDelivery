const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', // Referencia al modelo de perfil del cliente
    required: true
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', // Referencia al modelo de perfil del piloto
  },
  ubicacionInicial: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  ubicacionDestino: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  peso: {
    type: Number,
    required: true
  },
  distanciaRecorrer: {
    type: Number,
    required: true
  },
  pagaAlRecoger: {
    type: Boolean,
    default: false
  },
  cobraAlEntregar: {
    type: Boolean,
    default: false
  },
  mediosDePago: { 
    type: String,
    enum:['efectivo','tarjeta','botonDePago','PSE'],
    default: 'pendiente',
    required: true
  },
  tipoVehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoVehiculo', // Referencia al modelo de tipos de vehículos
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'asignado', 'en_camino', 'entregado','devuelto'],
    default: 'pendiente'
  },
  valorAPagar: {
    type: Number,
    required:false
  },
  valorACobrar: {
    type: Number,
    required: false
  },
  valorPorDistancia:Number,
  valorDelivery: Number,
  fotoRecoger: String,
  fotoLlevar:String,
  fotoEntrega: String
  // Otros campos relevantes
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
