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
import { useForm } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../services/redux/slice/sessionSlice'; // Import the registerUser action
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import GoogleAuthButton from '../../singleComponents/GooglAuthButton';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Correo electrónico inválido').required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio'),
});

export default function UserRegister() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const session = useSelector((state) => state.session); // Obtén el estado actual de la sesión
    
  
  const {
    setValue,
    formState: { errors },
    } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  

  // Manejar la redirección cuando el estado de sesión cambie
 useEffect(() => {
  if (session.success === true) {
    navigate(session.redirectPath);
    toast({
      title: "Sesión iniciada",
      description: "¡Bienvenido!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    const sessionData = {
      id:session.id,
      success: session.success,
      accessToken: session.accessToken,
      redirectPath: session.redirectPath,
      }; console.log(sessionData);
      
    localStorage.setItem('session', JSON.stringify(sessionData));
    
  }
}, [session.success, session.redirectPath, navigate, toast]);


  async function handleSubmit(values) {
    try {
      const dataRegistration = {
        email: values.email,
        password: values.password,
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
               <GoogleAuthButton value={setValue}
               type="submit"
               loadingText="Registrando"
               size="lg"
               bg="blue.400"
               color="white"
               _hover={{
                 bg: 'blue.500',
               }}/>
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
