import React, { useState, useEffect } from "react";
import { Checkbox, HStack } from "@chakra-ui/react";
import { API } from "../utils/API/constants"; 

const fetchTipoVehiculo = () => {
  return fetch(`${API.LOCALHOST}/tipovehiculo`)
    .then(res => res.json());
}

const VehicleSelection = ({ selectedVehiculo }) => {
  const [tipoVehiculos, setTipoVehiculos] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(""); // Usar una sola selección

  useEffect(() => {
    fetchTipoVehiculo()
      .then(data => setTipoVehiculos(data))
      .catch(error => console.error("Error fetching tipoVehiculo:", error));
  }, []); // Empty dependency array significa que este efecto se ejecuta una vez en el montaje del componente

  const handleCheckboxChange = (value) => {
    setSelectedVehicle(value); // Establecer el vehículo seleccionado
    selectedVehiculo(value); // Pasar el vehículo seleccionado
  };

  return (
    <HStack spacing={4}>
      {tipoVehiculos.map((tipoVehiculo) => (
        <Checkbox
          key={tipoVehiculo._id}
          isChecked={selectedVehicle === tipoVehiculo.nombre}
          onChange={() => handleCheckboxChange(tipoVehiculo.nombre)}
        >
          {tipoVehiculo.nombre}
        </Checkbox>
      ))}
    </HStack>
  );
};

export default VehicleSelection;
