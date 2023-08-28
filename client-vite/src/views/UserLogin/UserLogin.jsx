import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Divider,
  useToast,
  useBoolean,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { loginSessionUser } from "../../services/redux/slice/sessionSlice";
import ModalForgotPassword from "../../components/ModalForgotPassword/ModalForgotPassword";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const emailValidationSchema = Yup.object().shape({
  email: Yup.string().email("Correo electrónico inválido").required("Campo obligatorio"),
  password: Yup.string().required("Campo obligatorio"),
});

export default function UserLogin() {
  const { formState: { errors } } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useBoolean();
  const toast = useToast();
  const dispatch = useDispatch();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const bgElement = useColorModeValue("white", "gray.800");
  const txtColor = useColorModeValue("gray.600", "gray.100");
  const navigate = useNavigate();
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

  
    return (
      <Flex minH="100vh" align="center" justify="center" bg={bgColor}>
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          {/* ... (otras partes del componente) */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={emailValidationSchema}
            onSubmit={async (values) => {
              try {
                setLoading.on(); // Activa el loading
  
                const dataSession = {
                  email: values.email,
                  password: values.password,
                };
                
  
                // Realiza el dispatch a la acción
                dispatch(loginSessionUser(dataSession));
                
                
                setLoading.off(); // Desactiva el loading
              } catch (error) {
                setLoading.off(); // Desactiva el loading en caso de error
                // Maneja el error aquí
              }
            }}
          >
  
    <Form>
            <Box rounded="lg" bg={bgElement} shadow="lg" p={8}>
              <Stack spacing={4}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel color={txtColor}>Correo electrónico</FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    focusBorderColor={errors.email ? "red.500" : "teal.400"}
                    placeholder="ejemplo@gmail.com"
                    name="email"
                  />
                  <ErrorMessage name="email" component={FormErrorMessage} />
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel color={txtColor}>Contraseña</FormLabel>
                  <Field
                    as={Input}
                    type="password"
                    focusBorderColor={errors.password ? "red.500" : "teal.400"}
                    name="password"
                  />
                  <ErrorMessage name="password" component={FormErrorMessage} />
                </FormControl>
                <Stack spacing={4}>
                  <Divider borderColor={txtColor} />
                  <Stack spacing={5}>
                  
                    <Button
                      bg="teal.400"
                      color="white"
                      _hover={{ bg: "teal.500" }}
                      isLoading={loading}
                      type="submit"
                    >
                     Ingresar
                    </Button>
                    <Text color={txtColor} letterSpacing="0.5px">
                      ¿Olvidaste tu contraseña? click{" "}
                      <Link to="#" style={{ color: "cyan" }} onClick={onOpen}>
                        aqui
                      </Link>
                    </Text>
                    <ModalForgotPassword isOpen={isOpen} onClose={onClose} />
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Form>
        </Formik>
      </Stack>
    </Flex>
  );
}
