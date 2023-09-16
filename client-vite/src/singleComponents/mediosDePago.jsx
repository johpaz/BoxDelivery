import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { API } from "../utils/API/constants"; 

const fetchMediosPago = async () => {
  try {
    const response = await fetch(`${API.LOCALHOST}/mediospago`);
    const mediosPagoData = await response.json();
    return mediosPagoData;
  } catch (error) {
    console.error("Error fetching medios de pago:", error);
    return [];
  }
};

export default function MediosPago({ selectedMedioPago, onChange }) {
  const [mediosPago, setMediosPago] = useState([]);
  const [medioPago, setMedioPago] = useState(selectedMedioPago); // Inicializa con el valor seleccionado

  useEffect(() => {
    async function fetchAndSetMediosPago() {
      const mediosPagoData = await fetchMediosPago();
      setMediosPago(mediosPagoData);
    }
    fetchAndSetMediosPago();
  }, []);

  const handleMedioPagoChange = (newMedioPago) => {
    setMedioPago(newMedioPago); // Actualiza el medio de pago seleccionado
    onChange(newMedioPago);
  };

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} variant="outline" colorScheme="teal">
          Medio de Pago: {medioPago}
        </MenuButton>
        <MenuList>
          {mediosPago.map((medio) => (
            <MenuItem
              key={medio.nombre}
              onClick={() => handleMedioPagoChange(medio.nombre)}
            >
              {medio.nombre}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
