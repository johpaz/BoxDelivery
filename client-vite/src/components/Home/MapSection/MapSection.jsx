import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconMoto from './iconmoto.png';


const MapSection = () => {
  const pilotos = useSelector((state) => state.pilotos);

  // Coordenadas de latitud y longitud de Bogota
  const initialPosition = [4.710989, -74.072092];

  // Define el icono personalizado para los marcadores
  const customIcon = new L.Icon({
    iconUrl: iconMoto,
    iconSize: [15, 31],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  // Función para manejar el evento de clic en el mapa
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log('Latitud:', lat);
    console.log('Longitud:', lng);
    const popupContent = `You clicked the map at (${lat}, ${lng})`;

    // Crea una nueva ventana emergente y la abre en la ubicación del clic
    L.popup()
      .setLatLng(e.latlng)
      .setContent(popupContent)
      .openOn(e.target);
    console.log(e.latlng);
  };
 

  return (
    <div
      style={{
        position: 'relative',
        height: '400px',
        width: '600px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      {/* El componente MapContainer debe tener un tamaño definido para que el mapa sea visible */}
      <MapContainer center={initialPosition} zoom={15} style={{ height: '100%' }} onClick={handleMapClick}>
       
        {/* Agrega los marcadores y popups para el equipo de programadores */}
      

        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {pilotos.map((piloto) => ( 
           <Marker key={piloto._id} position={[piloto.lat,piloto.lon]} icon={customIcon}>
             <Popup>
               <div>
                 <h2>{piloto.name}</h2>
                 <p>Location: {[piloto.lat, piloto.lon]}</p>
               
               </div>
             </Popup> 
           </Marker> 
        ))} 
           
      </MapContainer>
    </div>
  );
};

export default MapSection;
