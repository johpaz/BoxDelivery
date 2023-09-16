import React, { useState } from 'react';
import {
  Select,
  Box,
  VStack,
  Text,
  Button,
  useToast,
} from '@chakra-ui/react';

const roles = [
  {
    _id: '64de7dc460f8e0c2d53f7b1f',
    name: 'Cliente',
  },
  {
    _id: '64de7dd760f8e0c2d53f7b22',
    name: 'Piloto',
  },
  // Agrega más roles si es necesario
];

function RoleSelector({onRoleSelect}) {
  const [selectedRoleId, setSelectedRoleId] = useState('');
  const toast = useToast();

  const handleRoleChange = (event) => {
    setSelectedRoleId(event.target.value);
    console.log(setSelectedRoleId);
    onRoleSelect(event.target.value)
  };


  return (
    <VStack align="stretch" spacing={4}>
      <Text fontSize="xl" fontWeight="bold">
        Selecciona un rol:
      </Text>
      <Select value={selectedRoleId} onChange={handleRoleChange}>
        <option value="">Selecciona un rol</option>
        {roles.map((role) => (
          <option key={role._id} value={role._id}>
            {role.name}
          </option>
        ))}
      </Select>
    </VStack>
  );
}

export default RoleSelector;
