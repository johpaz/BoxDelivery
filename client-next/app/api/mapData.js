import { google } from "@react-google-maps/api"; // Importar las bibliotecas y módulos necesarios


export default async function handler(req, res) {
    try {
      const { origin, destination } = req.query;
  
      if (!origin || !destination) {
        return res.status(400).json({ error: "Origin and destination are required" });
      }
  
      // Aquí podrías también enviar la API Key al cliente si deseas, pero ten en cuenta que no deberías exponer tu clave en el código del lado del cliente directamente.
  
      const directionsService = new google.maps.DirectionsService();
  
      const result = await directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
  
      const distance = result.routes[0].legs[0].distance.text;
      const duration = result.routes[0].legs[0].duration.text;
      onRouteData(distance, duration);
  
      res.status(200).json({ distance, duration });
    } catch (error) {
      console.error("Error calculating route:", error);
      res.status(500).json({ error: "An error occurred while calculating the route" });
    }
  }
  
  