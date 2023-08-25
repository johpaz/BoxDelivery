const PilotoProfile = require('../../models/pilotoModel');

const updatePiloto = async (req, res) => {
  const pilotoId = req.params.id;
  const updatedData = req.body; // Datos actualizados del piloto

  try {
    // Encuentra el piloto por ID y actualiza los datos
    const updatedPiloto = await PilotoProfile.findByIdAndUpdate(
      pilotoId,
      updatedData,
      { new: true } // Devuelve el piloto actualizado en la respuesta
    );

    if (!updatedPiloto) {
      return res.status(404).json({ message: 'Piloto no encontrado' });
    }

    res.status(200).json(updatedPiloto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el piloto' });
  }
};

module.exports = updatePiloto;
