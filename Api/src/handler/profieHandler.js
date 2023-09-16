const { validationResult, body } = require('express-validator');
const createProfileWithImage = require('../controllers/profile/profileController');

const validateCreateProfile = [
  body('userId').notEmpty().withMessage('El campo userId es obligatorio.'),
  body('role').notEmpty().withMessage('El campo role es obligatorio.'),
  body('profileImage').notEmpty().withMessage('El campo profileImage es obligatorio.'),
  body('email').isEmail().withMessage('El campo email debe ser una dirección de correo válida.'),
  body('phone').notEmpty().withMessage('El campo phone es obligatorio.'),
  body('address').notEmpty().withMessage('El campo address es obligatorio.'),
  // Puedes agregar más validaciones según tus necesidades
];

const handleCreateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, name, role, email, phone, profileImage,address, isPiloto } = req.body;

   console.log(profileImage);
  try {
    const result = await createProfileWithImage(userId, name, role, profileImage , email, phone, address, isPiloto);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    return res.status(500).json({ message: 'Error al crear el perfil.' });
  }
};

module.exports = {
  validateCreateProfile,
  handleCreateProfile
};
