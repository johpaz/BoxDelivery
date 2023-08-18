const User = require('../../models/userModel');

exports.createLocalUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validar que los campos obligatorios estén presentes
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Validar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario con los detalles proporcionados
    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
};
