const User = require('..//../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
};

