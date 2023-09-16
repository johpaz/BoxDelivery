const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClienteProfile', // Referencia al modelo de perfil del cliente
    
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PilotoProfile', // Referencia al modelo de perfil del piloto
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
    enum:['Efectivo','Tarjeta de Credito','Boton de Pago','PSE','Nequi','Daviplata'],
    default: 'pendiente',
    required: true
  },
  tipoVehiculo: {
    type: String, // Cambiado a String en lugar de mongoose.Schema.Types.ObjectId
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
