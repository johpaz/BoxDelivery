import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorMode,
  useColorModeValue // Importar useColorMode
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [
  {
    id: 1,
    title: 'Comodidad en tu Hogar',
    text: 'Nuestra aplicación te permite acceder a envios directamente desde la comodidad de tu computadora o celular. ¡la solución está a solo unos clics de distancia!'
  },
  {
    id: 2,
    title: 'Seguridad en cada Transacción',
    text: 'Puedes confiar en la seguridad de cada transacción. Somos la garantía de que los servicios brindados por nuestra comunidad son confiables y seguros.'
  },
  {
    id: 3,
    title: 'Entrega Precisa y Eficiente',
    text: 'Navega a través de nuestras tipos de vehiculos para encontrar  el que necesitas. Con los datos de tu carga la solución ideal está al alcance de tu mano.'
  },
  {
    id: 4,
    title: 'Tu opinion importa',
    text: 'Valoramos tu opinión. Nuestra plataforma está diseñada pensando en los usuarios, y tu interacción es fundamental para nosotros. Tu retroalimentación nos ayuda a mejorar y a ofrecer una experiencia aún mejor.'
  }
];

export default function FeaturesGrid() {
  const { colorMode } = useColorMode();

  // Definir el color de fondo según el modo de color
  const backgroundColor = colorMode === 'dark' ? 'gray.800' : 'gray.100';
  const textColor = useColorModeValue('blue.900', 'blue.400');
  const colorText = useColorModeValue('blue.900', 'gray.100');
  const titleColor = useColorModeValue('gray.900','gray.100');


  return (
    <Box p={4} h='100%' width='100%' backgroundColor={backgroundColor}>
      <Stack spacing={4} as={Container} maxW='3xl' textAlign='center' color={titleColor}>
        <Heading fontSize='3xl'  marginTop="2em">UNA SOLUCIÓN PARA TUS ENVIOS</Heading>
        <Text color={textColor} fontSize='xl'>
        Nuestra plataforma ofrece una serie de ventajas que hacen que la experiencia sea excepcional. Estamos aquí para conectar perfectamente la solución que necesitas con tus problemas cotidianos.
        </Text>
      </Stack>

      <Container maxW='6xl' mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align='top'>
              <Box color='teal.400' px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align='start'>
                <Text fontWeight={600} color={colorText} >
                  {feature.title}
                </Text>
                <Text color={useColorModeValue('gray.600', 'white')} textAlign="justify">{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}