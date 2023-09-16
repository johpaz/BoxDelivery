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

const fetchMediosPago = async () => {
  try {
    const response = await fetch("http://localhost:3004/mediospago");
    const mediosPagoData = await response.json();
    return mediosPagoData;
  } catch (error) {
    console.error("Error fetching medios de pago:", error);
    return [];
  }
};

export default function MediosPago({ selectedMedioPago, onChange }) {
  const [mediosPago, setMediosPago] = useState([]);

  useEffect(() => {
    async function fetchAndSetMediosPago() {
      const mediosPagoData = await fetchMediosPago();
      setMediosPago(mediosPagoData);
    }
    fetchAndSetMediosPago();
  }, []);

  const handleMedioPagoChange = (newMedioPago) => {
    onChange(newMedioPago);
  };

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} variant="outline" colorScheme="teal">
          Medio de Pago: {selectedMedioPago}
        </MenuButton>
        <MenuList>
          {mediosPago.map((medioPago) => (
            <MenuItem
              key={medioPago.nombre}
              onClick={() => handleMedioPagoChange(medioPago.nombre)}
            >
              {medioPago.nombre}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
