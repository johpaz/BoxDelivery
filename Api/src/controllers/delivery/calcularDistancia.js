const axios = require('axios');
const { API_KEY } = process.env;
const calcularDistancia = async (ubicacionInicial, ubicacionDestino) => {
  console.log(ubicacionInicial);
   
  const apiKey = API_KEY; // Reemplaza con tu clave de API de Google
    
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(ubicacionInicial)}&destinations=${encodeURIComponent(ubicacionDestino  )}&key=${apiKey}`;

   
  try {
    const response = await axios.get(url);
   
    const distanciaValue = response.data.rows[0].elements[0].distance.value / 1000;

    return distanciaValue;
  } catch (error) {
    console.error('Error al calcular la distancia:', error);
    return null;
  }
};

module.exports = calcularDistancia;
