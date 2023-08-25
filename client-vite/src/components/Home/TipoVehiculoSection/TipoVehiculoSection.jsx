import React from 'react';
import { Box, Button, Container, Flex, Heading, Stack, Text, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getAllTipoVehiculo} from '../../../../services/redux/actions/actions'
import motoIcon from '../../../assets/categoriesIcons/moto.png';
import CarryIcon from '../../../assets/categoriesIcons/carry.png';
import NprIcon from '../../../assets/categoriesIcons/npr.png';
import NhrIcon from '../../../assets/categoriesIcons/nhr.png';
import TractomulaIcon from '../../../assets/categoriesIcons/tractomula.png';





const Card = ({ heading, description, icon, cardBgColor, textColor, linkColor, iconBgColor }) => {
  const dispatch = useDispatch();
  const tiposVehiculo = useSelector(state => state.tiposVehiculo);

  useEffect(() => {
    dispatch(getAllTipoVehiculo()); 
  }, []);
  return (
    <Box
      maxW={{ base: 'full', sm: '275px' }}
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={cardBgColor}
      color={textColor}
      boxShadow="2xl" // Agregar sombra al igual que en el componente TopPro
    >
      <Stack align="start" spacing={2}>
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="full"
          bg={iconBgColor}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize="sm">
            {description}
          </Text>
        </Box>
        
        </Stack>
    </Box>
  );
};

const TipoVehiculoSection = () => {
  // Colores en modo light (mismos que en el componente TopPro)
  const cardBgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const linkColor = useColorModeValue('teal.400', 'teal.400');
  const iconBgColor = useColorModeValue('gray.900', 'gray.700');
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === 'dark' ? undefined : 'gray.100';
  const textColor2 = useColorModeValue('blue.900', 'blue.400');
  

  // Resto del código del componente
  return (
    <Box p={4} h="100%" width="100%" backgroundColor={backgroundColor}>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>
            NUESTROS VEHICULOS
          </Heading>
          <Text color={textColor2} fontSize={{ base: 'sm', sm: 'lg' }} textAlign="justify">
          Explora una Variedad de Tipos de Vehículos para Tus Envíos!
          <br/>
          En nuestra plataforma, te ofrecemos una amplia gama de tipos de vehículos disponibles
          para satisfacer tus necesidades de carga y envíos. Desde opciones de gran capacidad hasta
          alternativas más compactas, encontrarás la solución perfecta para transportar tus productos
          de manera eficiente.
          <br/>
          Cada tipo de vehículo tiene características únicas que se adaptan a diferentes
          tipos de carga. Ya sea que estés buscando transportar mercancías pesadas o pequeños
          paquetes, nuestros tipos de vehículos te brindan la flexibilidad para programar envíos 
          que se ajusten a tus requisitos específicos.
          </Text>
        </Stack>

        <Container maxW="5xl" mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
              heading="Moto"
              icon={<img src={motoIcon} alt="Moto" />}
              description="Motocicleta, vehiculo agil para entregas urgentes, capacidad de Carga en Kilos: 50"
              cardBgColor={cardBgColor}
              textColor={textColor}
              linkColor={linkColor}
              iconBgColor={iconBgColor}
            />
            <Card
              heading="Carry"
              icon={<img src={CarryIcon} alt="Arte y Diseño" />}
              description="Vehículo de carga ligero,  capacidad de Carga en  Kilos: 700"
              cardBgColor={cardBgColor}
              textColor={textColor}
              linkColor={linkColor}
              iconBgColor={iconBgColor}
            />
          
            
            
            <Card
              heading="Nhr"
              icon={<img src={NhrIcon} alt="Nhr" />}
              description="Camión de carga ligero, capacidad de Carga en Kilos: 3000."
              cardBgColor={cardBgColor}
              textColor={textColor}
              linkColor={linkColor}
              iconBgColor={iconBgColor}
            />
            <Card
              heading="Npr"
              icon={<img src={NprIcon} alt="Tecnología" />}
              description="Camión de carga mediano, capacidad de Carga en Kilos: 1500"
              cardBgColor={cardBgColor}
              textColor={textColor}
              linkColor={linkColor}
              iconBgColor={iconBgColor}
            />
            <Card
              heading="Tractomula"
              icon={<img src={TractomulaIcon} alt="Tractomula" />}
              description="Camión de carga pesado, capacidad de Carga Kilos: 30000,"
              cardBgColor={cardBgColor}
              textColor={textColor}
              linkColor={linkColor}
              iconBgColor={iconBgColor}
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default TipoVehiculoSection;