import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './HowItWorks.module.css';
import userImage from '../../../assets/defaultImages/userApp1.png'

export default function HowItWorks() {
  const { colorMode } = useColorMode();

  // Set text color based on the color mode
  const proTextColor = useColorModeValue('black', 'white');
  const finderTextColor = useColorModeValue('teal.400', 'teal.400');

  // Set the border color for Finder in dark mode

  // Definir el color de fondo según el modo de color
  const backgroundColor = colorMode === 'dark' ? 'gray.800' : 'gray.100';
  const colorText = useColorModeValue('black', 'white');

  return (
    <Flex
      minH="100%"
      direction={{ base: 'column', md: 'row' }}
      backgroundColor={backgroundColor} // Establecer el color de fondo
    >
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg" >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
              className={styles['tracking-in-contract']}
              color={proTextColor} // Set the color for "Pro" based on the color mode
            >
              Go
            </Text>
           
            <Text
              as="span"
              color={finderTextColor} // Set the color for "Finder" based on the color mode
             
              className={styles['tracking-in-contract']}
            >
              Fleet
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={colorText} textAlign="justify">
            Nuestra aplicación redefine la experiencia de solicitud y entrega de paquetes
            al combinar la tecnología de vanguardia con la conveniencia del día a día.
            Diseñada pensando en la eficiencia y la comodidad, esta plataforma innovadora 
            permite a los usuarios solicitar una amplia gama de servicios, desde entregas 
            hasta transporte personalizado, con tan solo unos pocos toques en sus dispositivos móviles.
            Con una interfaz intuitiva y amigable, los usuarios pueden personalizar sus solicitudes, 
            seleccionar sus medios de pago preferidos y rastrear en tiempo real la ubicación de los 
            proveedores de servicios, todo en un solo lugar.!!
            <br />
            La aplicación destaca por su énfasis en la seguridad y confiabilidad.
            Los proveedores de servicios son cuidadosamente verificados para garantizar
            la calidad y confianza. Los usuarios pueden evaluar y comentar sobre las experiencias,
            formando una comunidad de confianza y mejorando la calidad de los servicios.
            <br />
            La aplicación simplifica las solicitudes de servicios, permitiendo a los usuarios
            personalizar y gestionar fácilmente sus necesidades diarias. Ya sea una entrega 
            urgente o un traslado, la plataforma agiliza el proceso, ahorrando tiempo y simplificando
            la complejidad. Con tecnología avanzada y enfoque en la satisfacción, la aplicación 
            mejora la forma en que se acceden y gestionan los servicios.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              as={Link}
              to="/registerProvider"
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.400',
              }}
              className={`${styles['bounce-top']} ${styles.boton}`}
              shadow="md" // Add shadow to the "Registrate!" button
            
            >
              Registrate!
            </Button>

            <Button
              as={Link}
              to="/comofunciona"
              rounded="full"
              bg="teal.400"
              color="white"
              _hover={{
                bg: 'teal.600',
              }}
              className={styles['bounce-top']}
              shadow="md"
            >
              Como funciona?
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Image
        alt="User Image"
        objectFit="cover"
        marginTop="1em"        
        src={userImage}
        borderRadius="2em"
        boxSize={{ base: "40em", md: "48em", lg: "48em" }} // Ajusta los tamaños según tus necesidades
      />
      </Flex>
    </Flex>
  );
}
