const Profile = require('../../models/profileModel');
const PilotoProfile = require('../../models/pilotoModel'); // Importa el modelo PilotoProfile si existe
const ClienteProfile = require('../../models/clienteModel'); // Importa el modelo ClienteProfile si existe

const getAllProfiles = async (req, res) => {
  try {
    // Obtiene todos los perfiles independientemente del tipo
    const profiles = await Profile.find();

    // Si existen modelos específicos para pilotos y clientes, también puedes obtenerlos
    // const pilotoProfiles = await PilotoProfile.find();
    // const clienteProfiles = await ClienteProfile.find();

    return res.status(200).json({ success: true, profiles });
  } catch (error) {
    console.error('Error al obtener los perfiles:', error);
    return res.status(500).json({ success: false, message: 'Error al obtener los perfiles.' });
  }
};


const getAllClientes = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const clientes = await ClienteProfile.find();
  
      // Si existen modelos específicos para pilotos y clientes, también puedes obtenerlos
      // const pilotoProfiles = await PilotoProfile.find();
      // const clienteProfiles = await ClienteProfile.find();
  
      return res.status(200).json({ success: true, clientes });
    } catch (error) {
      console.error('Error al obtener los perfiles:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los perfiles.' });
    }
  };

  const getAllPilotos = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const pilotos = await PilotoProfile.find();
  
      // Si existen modelos específicos para pilotos y clientes, también puedes obtenerlos
      // const pilotoProfiles = await PilotoProfile.find();
      // const clienteProfiles = await ClienteProfile.find();
  
      return res.status(200).json(pilotos);
    } catch (error) {
      console.error('Error al obtener los perfiles:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los perfiles.' });
    }
  };

  module.exports ={
    getAllProfiles,
    getAllClientes,
    getAllPilotos

  }