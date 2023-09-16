import React, { useState, useRef, useEffect } from "react";
import {
  Input,
  Button,
  Badge,
  Box,
  FormControl,
} from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { GOOGLE } from "../utils/API/constants";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const API_KEY = GOOGLE.API_KEY;
const googleMapsLibraries = ["places"];

const MapComponent = ({ onDirectionsChange }) => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: googleMapsLibraries,
  });
  const originRef = useRef();
  const destinationRef = useRef();
  const KEY_GOOGLE = GOOGLE.CLIENT_ID;
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duracion, setDuracion] = useState("");
  const [ubicacionInicial, setUbicacionInicial] = useState("");
  const [ubicacionDestino, setUbicacionDestino] = useState("");
 
  useEffect(() => {
    // Obtener la ubicación inicial del dispositivo al cargar el componente
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const initialLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // Establecer la ubicación inicial en el mapa
        setMap(initialLocation);
      });
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const departureTime = new Date();
  async function calculateRoute() {
    if (originRef.current.value === destinationRef.current.value === ''){
      return
    }
    const directionsService = new google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: departureTime, // Aquí estableces la hora de partida actual
        trafficModel: google.maps.TrafficModel.BEST_GUESS
      }
    });
    // Obtener las coordenadas de inicio y destino desde el resultado
  const startLocation = result.routes[0].legs[0].start_location;
  

  const endLocation = result.routes[0].legs[0].end_location;
   
  const origen = [startLocation.lat(),startLocation.lng()]
  const destino=[endLocation.lat(),endLocation.lng()]
  // Establecer las coordenadas en dataDelivery o realizar cualquier acción necesaria
  onDirectionsChange(origen, destino);
    // Establecer las coordenadas en dataDelivery
    setDirectionsResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuracion(result.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuracion("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <Box>
      <Badge colorScheme="teal">Distancia: {distance}</Badge>
      <Badge colorScheme="teal">Duración: {duracion}</Badge>
      <div className="mb-3">
        <Autocomplete
          options={{
            componentRestrictions: { country: "co" }, // Cambia al país que necesites
          }}
        >
          <FormControl>
            <Input
              label="origen"
              type="text"
              placeholder="Direccion Inicio"
              ref={originRef}
              />
          </FormControl>
        </Autocomplete>
        <Autocomplete
          options={{
            componentRestrictions: { country: "co" }, // Cambia al país que necesites
          }}
        >
          <FormControl>
            <Input
              label="destino"
              type="text"
              placeholder="Direccion Destino"
              ref={destinationRef}
              
            />
          </FormControl>
        </Autocomplete>
        <Button colorScheme="teal" onClick={calculateRoute}>
          Calcular Ruta
        </Button>
        <Button colorScheme="red" onClick={clearRoute}>
          Limpiar Ruta
        </Button>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={map || null} // Utilizar la ubicación inicial del dispositivo o el valor predeterminado
        zoom={15}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
        googleMapsApiKey={KEY_GOOGLE}
      >
        {map && <Marker position={map} />}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </Box>
  );
};

export default MapComponent;
