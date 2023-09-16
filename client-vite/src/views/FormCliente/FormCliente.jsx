import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Button,
  useColorModeValue,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import PrivacyNotice from "../../components/PrivacyNotice/PrivacyNotice";
import { useDispatch, useSelector } from 'react-redux';
import RoleSelector from '../../singleComponents/RoleSelector';
import React,{useState} from 'react';
import ImageUpload from '../../singleComponents/imageUpload.jsx';
import { registerProfileClient } from '../../services/redux/slice/profileSlice';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const validationSchema = Yup.object({
  name: Yup.string()
    .required("El campo nombre y apellido es requerido")
    .matches(/^[a-zA-ZñÑ\s]+$/, "El nombre y apellido no puede contener expresiones especiales o símbolos")
    .min(2, "El nombre y apellido deben tener al menos 2 caracteres")
    .max(100, "El nombre y apellido no puede tener más de 100 caracteres"),
  phone: Yup.string()
    .required("El campo teléfono es requerido")
    .matches(/^\d+$/, "El teléfono solo debe contener números")
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(10, "El teléfono no puede tener más de 10 dígitos"),
});


function FormCliente() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [selectedRole, setSelectedRole] = useState(null);
  const userIdFromState = useSelector((state) => state.session.id);
  const [selectedImageUpload, setSelectedImageUpload] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();
   

  // Manejar la redirección cuando el estado de sesión cambie
 useEffect(() => {
  if (profile.success === true) {
    navigate(profile.redirectPath);
    toast({
      title: "Sesión iniciada",
      status: "success",
      description: "¡Bienvenido!",
      duration: 3000,
      isClosable: true,
    });
    const sessionData = {
      success: profile.success,
      userType: profile.userType,
      redirectPath: profile.redirectPath,
      profileImagen: profile.profileImagen,
      clienteId: profile.clienteId,
      pilotoId: profile.pilotoId,
    
    };
    localStorage.setItem('session', JSON.stringify(sessionData));
  }
}, [profile.success, profile.redirectPath, navigate, toast]);


  const initialValues = {
    role: "",
    name: "",
    phone: "",
    profileImage:{},
    address: "",
  };

  async function handleSubmit(values) {
    try {
      const newData = {
        name: values.name,
        phone: values.phone,
        profileImage: selectedImageUpload,
        address: values.address,
        userId: userIdFromState,
        role: selectedRole,
        
      };

      console.log(newData );

      // Llama a la acción registerProfileClient con los datos
      await dispatch(registerProfileClient(newData));
    } catch (error) {
      // Manejo de error
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Flex
          minH="80vh"
          align="center"
          justify="center"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            rounded="lg"
            bg={useColorModeValue("blackAlpha.800", "gray800")}
            p={8}
            color="gray.300"
            width={{ base: "90%", sm: "80%", md: "60%", lg: "500px" }}
          >
            <Stack spacing={4}>
              <Heading
                fontSize="4xl"
                bgGradient="linear(to-l, teal.300, green.400)"
                bgClip="text"
                align="center"
              >
                COMPLETA LOS DATOS PARA DIRIGIRTE A TU DASHBOARD
              </Heading>
              <FormControl> 
                <FormLabel>ID del Usuario</FormLabel>
                <Input
                  type="text"
                  value={userIdFromState}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel>Imagen de perfil</FormLabel>
                <ImageUpload name='profileImage' onImageSelect={setSelectedImageUpload}/>
                <ErrorMessage
                  name="profileImage"
                  component="div"
                  style={{ color: "red" }}
                />
              </FormControl>
              <RoleSelector name='role' onRoleSelect={setSelectedRole} />
              <FormControl marginTop="5">
                <FormLabel>Nombre y apellido</FormLabel>
                <Field
                  name="name"
                  type="text"
                  as={Input}
                  placeholder="Nombre y apellido"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red" }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Teléfono</FormLabel>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  as={Input}
                  placeholder="Teléfono"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  style={{ color: "red" }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Dirección</FormLabel>
                <Field
                  id="address"
                  name="address"
                  type="text"
                  as={Input}
                  placeholder="Dirección"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  style={{ color: "red" }}
                />
              </FormControl>

              <FormLabel />
              <ButtonGroup
                flexWrap="wrap-reverse"
                justifyContent="center"
                spacing={5}
              >
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg="blue.400"
                  color="white"
                  mt={4}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Envia los Datos
                </Button>
                <PrivacyNotice />
              </ButtonGroup>
            </Stack>
          </Box>
        </Flex>
      </Form>
    </Formik>
  );
}

export default FormCliente;
