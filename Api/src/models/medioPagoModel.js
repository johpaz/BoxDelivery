const mongoose = require('mongoose');

// Definir el esquema del medio de pago
const medioPagoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

// Crear el modelo de medio de pago a partir del esquema
const MedioPago = mongoose.model('MedioPago', medioPagoSchema);

module.exports = MedioPago;
