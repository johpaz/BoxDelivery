const mongoose = require('mongoose');

const permissionAssignmentSchema = new mongoose.Schema({
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  permissionIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Permission',
    required: true
  }]
});

const PermissionAssignment = mongoose.model('PermissionAssignment', permissionAssignmentSchema);

module.exports = PermissionAssignment;
