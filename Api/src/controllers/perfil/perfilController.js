// Controlador para editar el perfil de un usuario
const editUserProfile = async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, address, phone } = req.body;
  
      // Actualiza los campos necesarios en el modelo de usuario
      await User.findByIdAndUpdate(userId, { name, address, phone });
  
      res.json({ message: 'Perfil actualizado exitosamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor.' });
    }
  };
  