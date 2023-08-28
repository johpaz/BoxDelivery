import { useState, useEffect } from 'react';
import { Box, Button, Heading, Stack, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import imageLogo from './logo.png';


const MercadoPagoForm = () => {
  const [donationAmount, setDonationAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);
  const [preferenceId, setPreferenceId] = useState(null);
  
  useEffect(() => {
    // Obtén la URL actual
    const currentUrl = window.location.href;

    // Extrae los parámetros de la URL
    const urlParams = new URLSearchParams(currentUrl);

    // Obtén los datos que necesitas
    const collectionStatus = urlParams.get('collection_status');
    const preferenceId = urlParams.get('preference_id');

    // Aquí puedes utilizar la información como desees
    console.log('collectionStatus:', collectionStatus);
    console.log('preferenceId:', preferenceId);

    // Enviar los datos al backend en un JSON mediante una solicitud POST
    axios.post('http://localhost:3006/premium', {
      collectionStatus: collectionStatus,
      preferenceId: preferenceId,
    })
    .then((response) => {
      console.log('Respuesta del backend:', response.data);
      // Aquí puedes manejar la respuesta del backend, si es necesario
    })
    .catch((error) => {
      console.error('Error al enviar datos al backend:', error);
      // Aquí puedes manejar errores en caso de que ocurran
    });
  }, []);

  initMercadoPago('TEST-6d144f52-f1d4-4a24-853e-d1b4592053fb');

  const handleDonationChange = (donationAmount) => {
    setDonationAmount(donationAmount);
    setTotalAmount(donationAmount * 1);
  };

  const handleDonate = (value) => {
    setDonationAmount(value);
    setTotalAmount(value * 1);
  };

  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:3006/cash', {
        description:"Gracias por el Cafe",
        price: totalAmount,
        quantity:1,
        ProfesionalId:7,
      });
  1
      console.log(response);
      const { preferenceId } = response.data;
      console.log(preferenceId);
      return preferenceId;
    } catch (error) {
      console.log(error.message);
    }
  };


  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <Box maxW="400px" mx="auto" p={4} bg="#f2f2f2" borderRadius="8px">
      <Box
        bg={`url(${imageLogo}) center center / cover`}
        w="350px"
        h="90px"
        borderRadius="8px"
        mb={4}
      />
      <Heading as="h2" textAlign="center" mb={4}>
        Ayúdame con un Café
      </Heading>
      <Stack direction="row" spacing={2} mb={4}>
        <Button onClick={() => handleDonationChange(3)} bgColor="#e64949" color="#fff">
          😁 ☕ x3
        </Button>
        <Button onClick={() => handleDonationChange(5)} bgColor="#e64949" color="#fff">
          😁 ☕ x5
        </Button>
        <Button onClick={() => handleDonationChange(10)} bgColor="#e64949" color="#fff">
          😁 ☕ x10
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} align="center" mb={4}>
        <NumberInput size="sm" min={1} value={donationAmount} onChange={(_, value) => handleDonate(value)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper bgColor="#141313" color="#fff" />
            <NumberDecrementStepper bgColor="#141313" color="#fff" />
          </NumberInputStepper>
        </NumberInput>
        <Text className="donate-amount">
          Invitame {donationAmount} {donationAmount === 1 ? 'Cafesito $' : 'Cafesitos $'} {totalAmount}❣
        </Text>
      </Stack>
      <Stack direction="row" mb={4}>
        <Button colorScheme="blue" onClick={handleBuy}>
          Paga
        </Button>
        {preferenceId && <Wallet initialization={{ preferenceId }}   />}
      </Stack>
    </Box>
  );
};

export default MercadoPagoForm;
