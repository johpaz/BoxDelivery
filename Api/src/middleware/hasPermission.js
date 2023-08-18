const hasPermission = (requiredPermissions) => {
    return (req, res, next) => {
      const userPermissions = req.user.role.permissions;
  
      const hasAllPermissions = requiredPermissions.every(permission =>
        userPermissions.includes(permission)
      );
  
      if (hasAllPermissions) {
        next();
      } else {
        res.status(403).json({ message: 'Acceso no autorizado.' });
      }
    };
  };
  
  module.exports = hasPermission;
  