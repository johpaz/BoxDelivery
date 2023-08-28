import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useToast,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import NavLink from '../../singleComponents/NavLink';
import Logo from '../../assets/categoriesIcons/logo1.png';
import logodark from "../../assets/categoriesIcons/logo1dark.png";
import SinFoto from '../../assets/defaultImages/sinfoto.webp';
import DarkModeToggle from '../../utils/Darkmode/DarkmodeToggle';
import { useSelector,useDispatch } from "react-redux";
import { removeSessionState } from '../../services/redux/slice/sessionSlice';


export default function LoggedNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const session = useSelector(state => state.session);
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();


  function handleLogout() {
   
  
    // Llama a la acción para borrar los datos de la sesión en el estado
    dispatch(removeSessionState());
  
      // Puedes agregar aquí la lógica para cerrar la sesión si es necesario
    window.localStorage.removeItem('userSession');
      toast({
      title: 'Sesión finalizada',
      description: 'Esperamos verte de nuevo',
      status: 'success',
      position: 'bottom-right',
      duration: 5000,
      isClosable: true
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    navigate('/');
  }

  return (
    <nav style={{
      position: "sticky",
      width: '100%',
      top: 0,
      zIndex: 100,
    }}>
      <Box
        bg={useColorModeValue('gray.200', 'gray.900')}
        px='40px'
        py='10px'
      >
        <Flex
          h={16}
          alignItems='center'
          justifyContent='space-between'
        >
          <IconButton
            size='lg'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems='center'
          >
            <Box onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }}>
              <Image
                src={colorMode === "light" ? Logo : logodark}
                width={{ base: "50%", md: "100%", lg: "100%" }}
                height="70px"
              />
            </Box>
            <HStack
              as='nav'
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              fontSize='1.15rem'
              fontWeight='bold'
            >
              <NavLink textLink='¿CÓMO FUNCIONA?' routeLink='/comofunciona' />
              <NavLink textLink='PROFESIONALES' routeLink='/categories' />
              <NavLink textLink='CONTACTO' routeLink='/feedback' />
              <NavLink textLink='ACERCA DE' routeLink='/aboutus' />
            </HStack>
          </HStack>
          <DarkModeToggle />
          <Flex
            alignItems='center'
          >
            <Menu>
              <MenuButton
                as={Button}
                rounded='full'
                variant='link'
                cursor='pointer'
                minW={0}
              >
                <Avatar
                  size={{ base: 'md', md: 'lg', lg: 'lg' }}
                  src={session.image || SinFoto}
                />
              </MenuButton>
              <MenuList>
                {
                (session.userType === 'cliente')
                  ? <MenuItem onClick={() => navigate('/dashboardClient')}>Dashboard</MenuItem>
                  : session.userType=== 'piloto'
                    ? <MenuItem onClick={() => navigate('/dashboardPiloto')}>Dashboard</MenuItem>
                    : session.userType === 'admin'
                      ? <MenuItem onClick={() => navigate('/dashboardAdmin/manageProfesional')}>Dashboard</MenuItem>
                      : null
                }
                {
                  (session.userType === 'piloto')
                    ? <MenuItem onClick={() => navigate('/registerCliente')}>Ver mi perfil</MenuItem>
                    : null
                }
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen
          ? (
            <Box
              pb={4}
              display={{ md: 'none' }}
            >
              <Stack as='nav' spacing={4}>
                <NavLink textLink='¿Cómo funciona?' routeLink='/comofunciona' />
                <NavLink textLink='Profesionales' routeLink='/categories' />
                <NavLink textLink='Contacto' routeLink='/feedback' />
                <NavLink textLink='Acerca de' routeLink='/aboutus' />
              </Stack>
            </Box>
          )
          : null}
      </Box>
    </nav>
  );
}
