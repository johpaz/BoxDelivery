const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: String, // El nombre del rol (por ejemplo, "admin", "cliente", "piloto")
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Permission' // Referencia al modelo de permiso
    }
  ]
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
