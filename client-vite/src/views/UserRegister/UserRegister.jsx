import React, {useEffect}from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  useToast,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../services/redux/slice/sessionSlice'; // Import the registerUser action
import DropdownMenu from './../../singleComponents/DropdownMenu';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GOOGLE } from '../../utils/API/constants'; 
import GoogleAuthButton from '../../singleComponents/GooglAuthButton'

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Correo electrónico inválido').required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio'),
});

export default function UserRegister() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUser] = useState(null);
  const userTypes = [
    { name: 'Cliente' },
    { name: 'Piloto' }
  ];
  const navigate = useNavigate();
  const toast = useToast();
  const session = useSelector((state) => state.session); // Obtén el estado actual de la sesión
  

  // Manejar la redirección cuando el estado de sesión cambie
 useEffect(() => {
  if (session.success === true) {
    navigate(session.redirectPath);
    toast({
      title: "Sesión iniciada",
      description: "¡Bienvenido de nuevo!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
}, [session.success, session.redirectPath, navigate, toast]);

  function handleSelectUser(event) {
    const { name } = event.target;
    setUser(name);
    }

  async function handleSubmit(values) {
    try {
      const dataRegistration = {
        email: values.email,
        password: values.password,
        userType: usuario,
        // ... other registration data ...
      };

      await dispatch(registerUser(dataRegistration)); // Dispatch the registration action
      // You can also navigate or show a toast message here after successful registration
    } catch (error) {
      // Handle registration error
    }
  }
  

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.800', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading
            fontSize="4xl"
            textAlign="center"
            bgGradient="linear(to-l, teal.300, green.400)"
            bgClip="text"
          >
            Registrate
          </Heading>
          <Text fontSize="lg" color="gray.50">
            Para disfrutar de todos nuestros servicios
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('blackAlpha.800', 'gray.800')}
          color="gray.50"
          boxShadow="lg"
          p={8}
        >
          <Formik
            initialValues={{
              email: '',
              password: '',
              userType:'',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormControl id="email" isRequired>
                <FormLabel>Correo electronico</FormLabel>
                <Field as={Input} type="email" name="email" />
                <ErrorMessage name="email" component={Text} color="red.500" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Field as={Input} type={showPassword ? 'text' : 'password'} name="password" />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="password" component={Text} color="red.500" />
              </FormControl>
              <DropdownMenu
                id="userType"
                titleMenu={usuario}
                menuItems={userTypes}
                onClick={handleSelectUser}
              />
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Registrando"
                  size="lg"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Registrar
                </Button>
              </Stack>
              <Stack spacing={10} pt={2}>
              <GoogleAuthButton
                  setValue={setValue}
                />              
              </Stack>
              <Stack pt={6}>
                <Text align="center">
                  ¿Ya tienes una cuenta? Ingresa desde aquí{' '}
                  <Link to="/userLogin">Login</Link>
                </Text>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
