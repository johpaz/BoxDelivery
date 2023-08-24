import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

const fetchTipoVehiculo = () => {
  return fetch('http://localhost:3004/tipovehiculo')
    .then(res => res.json());
}

const VehicleSelection = () => {
  const [tipoVehiculos, setTipoVehiculos] = useState([]);
  const [selected, setSelected] = useState(["Moto"]);
  const [selectedVehicle, setSelectedVehicle] = useState("Moto");

  useEffect(() => {
    fetchTipoVehiculo()
      .then(data => setTipoVehiculos(data))
      .catch(error => console.error("Error fetching tipoVehiculo:", error));
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleCheckboxChange = (value) => {
    setSelected([value]);
    setSelectedVehicle(value);
  };

  return (
    <div className="flex gap-4">
      <CheckboxGroup
        label="Selecciona el tipo de Vehiculo"
        orientation="horizontal"
        color="secondary"
        value={selected}
      >
        {tipoVehiculos.map((tipoVehiculo) => (
          <Checkbox
            key={tipoVehiculo._id}
            value={tipoVehiculo.nombre}
            color="success"
            disabled={selected.includes(tipoVehiculo.nombre)}
            onChange={() => handleCheckboxChange(tipoVehiculo.nombre)}
          >
            {tipoVehiculo.nombre}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

export default VehicleSelection;
