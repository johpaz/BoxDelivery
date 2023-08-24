import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from './icon.png';
import maleIcon from './maleProgramer.png';
import femaleIcon from './femaleProgramer.png';

const MapSection = () => {
  const suppliers = useSelector((state) => state.suppliers);

  // Coordenadas de latitud y longitud de Buenos Aires
  const initialPosition = [-0.1807, -78.4678];

  // Define el icono personalizado para los marcadores
  const customIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [15, 31],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  const customMaleIcon = new L.Icon({
    iconUrl: maleIcon,
    iconSize: [35, 61],
    iconAnchor: [10, 81],
    popupAnchor: [1, -80],
    tooltipAnchor: [26, -38],
  });

  const customFemaleIcon = new L.Icon({
    iconUrl: femaleIcon,
    iconSize: [35, 61],
    iconAnchor: [40, 81],
    popupAnchor: [1, -80],
    tooltipAnchor: [26, -38],
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
      <MapContainer center={initialPosition} zoom={2.45} style={{ height: '100%' }} onClick={handleMapClick}>
       
        {/* Agrega los marcadores y popups para el equipo de programadores */}
        <Marker position={[6.6483, -74.2479]} icon={customFemaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>Nathaly Quiva</h2>
              <p>Bogota, Colombia</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[6.2530, -75.5646]} icon={customMaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>Cristian Cuesta</h2>
              <p>Medellin, Colombia</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-8.2530, -80.5646]} icon={customMaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>John Paez</h2>
              <p>Soacha, Colombia</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[19.4326 , -99.1332]} icon={customMaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>Josue Cruz</h2>
              <p>Ciudad de Mexico</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-24.7637 , -58.2114  ]} icon={customMaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>Cristian Maidana</h2>
              <p>Buenos Aires</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-46.7637 ,  -68.2114  ]} icon={customFemaleIcon}>
          <Popup autoClose={false}>
            <div>
            <h2>Maria Olaechea</h2>
              <p>Olavarría, Buenos Aires</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-38.7637, -58.2114  ]} icon={customMaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>Agustin Boasso</h2>
              <p>Cordoba Argentina</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-32.8908,  -68.8386  ]} icon={customMaleIcon}>
          <Popup autoClose={false}>
            <div>
              <h2>Jose Brito</h2>
              <p>Guaymallen, Mendoza Argentina</p>
              <p>Staff Programer Profinder</p>
            </div>
          </Popup>
        </Marker>

        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Agrega los marcadores y popups para cada proveedor */}
        {suppliers.map((supplier) => (
          <Marker key={supplier.id} position={supplier.geolocation} icon={customIcon}>
            <Popup>
              <div>
                <h2>{supplier.name}</h2>
                <p>Location: {supplier.ubication.location}</p>
                {/* Si el proveedor tiene al menos una ocupación */}
                {supplier.professions.length > 0 && <p>Category: {supplier.professions[0].category}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
