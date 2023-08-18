const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
