import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Alert, AlertIcon, AlertTitle, VStack, HStack, Image, SimpleGrid, IconButton } from "@chakra-ui/react";
import { GoogleMap, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { MdShare } from "react-icons/md"; // Importa el icono de compartir de Chakra UI
import { GOOGLE } from "../../../utils/API/constants";

const ServiceDetailsMap = () => {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const dispatch = useDispatch();
  const [userLocation, setUserLocation] = useState(null);
  const KEY = GOOGLE.API_KEY;
  const delivery = useSelector((state) => state.delivery);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (isLoaded && delivery) {
      // Obtener la ubicación inicial del dispositivo al cargar el componente
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const initialLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // Establecer la ubicación inicial en el mapa
          setUserLocation(initialLocation);
        });
      }

      // Obtener las coordenadas de inicio y fin del recorrido
      const startLocation = {
        lat: delivery.ubicacionInicial.lat,
        lng: delivery.ubicacionInicial.lon,
      };
      const endLocation = {
        lat: delivery.ubicacionDestino.lat,
        lng: delivery.ubicacionDestino.lon,
      };

      // Configurar la solicitud de direcciones
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: startLocation,
          destination: endLocation,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            setDirectionsResponse(result);
          } else {
            console.error("Error al obtener direcciones:", status);
          }
        }
      );
    }
  }, [isLoaded, delivery]);

  if (!isLoaded || !userLocation) {
    return <div>Cargando...</div>;
  }

  return (
    <Box p={4} boxShadow="md" borderRadius="md">
      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          Detalles del Servicio
        </Heading>
        <Text>Duración: {delivery.tiempo} minutos</Text>
        <Text>Distancia: {delivery.distanciaRecorrer} km</Text>
        <Text>Tipo de Vehículo: {delivery.tipoVehiculo}</Text>
        <Text>Peso: {delivery.peso} kg</Text>
        <Text>Valor Delivery: $ {delivery.valorDelivery}</Text>
      </Box>
      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          Detalles del Piloto
        </Heading>
        <HStack spacing={4} alignItems="center">
          <Image src={delivery.fotoPiloto} alt="Foto del Piloto" borderRadius="full" boxSize="50px" />
          <VStack align="start">
            <Text>{delivery.nombrePiloto}</Text>
            <Text>Teléfono: {delivery.telefonoPiloto}</Text>
          </VStack>
        </HStack>
      </Box>
      {directionsResponse && (
        <Box mt={4}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={userLocation}
            zoom={15}
          >
            <DirectionsRenderer directions={directionsResponse} />
          </GoogleMap>
        </Box>
      )}
      <Box position="fixed" bottom="2rem" right="2rem">
        <IconButton
          colorScheme="teal"
          aria-label="Compartir"
          icon={<MdShare />}
          onClick={() => {
            // Agrega aquí la lógica para compartir
          }}
        />
      </Box>
    </Box>
  );
};

export default ServiceDetailsMap;
