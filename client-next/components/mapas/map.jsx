"use client";
import { Input, Button, Chip } from "@nextui-org/react";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete,DirectionsRenderer } from "@react-google-maps/api";
import { useState,useRef } from "react";
import { createContext, useContext } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};


const MapComponent = () => {
  const centerBogota = { lat: 4.710989, lng: -74.072090 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '1233',
    libraries: ["places"],
  });
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance,setDistance] = useState(''); 
  const [duracion, setDuracion] = useState('');
  const originRef = useRef();
  const destinationRef = useRef();

  
    if (!isLoaded) {
    return <div>Loading...</div>;
  }
  async function calculateRoute(){
    if (originRef.current.value === destinationRef.current.value === ''){
      return
    }
    const directionsService = new google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING
    });
    
    setDirectionsResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuracion(result.routes[0].legs[0].duration.text);
  } 
 
  function clearRoute(){
    setDirectionsResponse(null);
    setDistance('');
    setDuracion('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }
 

  return (
    <section>
      <Chip>Distancia:{distance}</Chip>
      <Chip>Duración: {duracion}</Chip>
      <div className="mb-3">
      <Autocomplete  options={{
            componentRestrictions: { country: 'co' }, // Limit to Colombia
            types: ['address'], // Only show addresses
          }}>
        <Input label="ubicacionInicial" type="text" placeholder="Direccion Inicio" ref={originRef} />
      </Autocomplete>
      <Autocomplete   options={{
            componentRestrictions: { country: 'co' }, // Limit to Colombia
            types: ['address'], // Only show addresses
          }}>
        <Input label="destino" type="text" placeholder="Direccion Destino" ref={destinationRef}/>
      </Autocomplete>
        <Button type="submit" onClick ={calculateRoute}>Calcular Ruta</Button>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerBogota}
        zoom={15}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={centerBogota} />
        {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
      </GoogleMap>
    </section>
  );
};

export default MapComponent;
