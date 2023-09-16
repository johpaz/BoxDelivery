import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

// Este es un ejemplo de datos iniciales del perfil, debes reemplazarlo con tus propios datos.
const initialProfileData = {
  name: 'Nombre de usuario',
  email: 'correo@example.com',
  bio: 'Escribe una breve descripción sobre ti',
};

const ProfileUpdate = () => {
  // Función para manejar la actualización del perfil
  const handleProfileUpdate = (values) => {
    // Aquí puedes enviar los datos actualizados del perfil al servidor
    console.log('Datos del perfil actualizados:', values);
    // También puedes realizar una solicitud HTTP para actualizar los datos en el servidor
  };

  return (
    <Box>
      <h2>Actualizar Perfil</h2>
      <Formik
        initialValues={initialProfileData}
        onSubmit={handleProfileUpdate}
      >
        <Form>
          <Field name="name">
            {({ field }) => (
              <FormControl mb={4}>
                <FormLabel>Nombre:</FormLabel>
                <Input {...field} />
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({ field }) => (
              <FormControl mb={4}>
                <FormLabel>Correo Electrónico:</FormLabel>
                <Input
                  {...field}
                  isDisabled // Deshabilitar el campo de correo electrónico
                />
              </FormControl>
            )}
          </Field>

          <Field name="bio">
            {({ field }) => (
              <FormControl mb={4}>
                <FormLabel>Biografía:</FormLabel>
                <Textarea {...field} />
              </FormControl>
            )}
          </Field>

          <Button type="submit" colorScheme="teal" mt={4}>
            Guardar Cambios
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default ProfileUpdate;
