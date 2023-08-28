import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";

const handleLogin = () => {
  const sessionData = {
    id: 1,
    email: "john@example.com",
    message: "Logged in",
    status: true,
  };
  dispatch(setSessionState(sessionData));
};

const handleLogout = () => {
  dispatch(removeSessionState());
};

function LoginForm({ onLoginWithGoogle }) {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.800"
    >
      <Box
        rounded="lg"
        bg="blackAlpha.800"
        boxShadow="lg"
        p={8}
        color="gray.300"
        width={{ base: "90%", sm: "80%", md: "60%", lg: "500px" }}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input type="email" placeholder="Correo electrónico" />
          </FormControl>

          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" placeholder="Contraseña" />
          </FormControl>

          <Button
            bg="teal.400"
            color="white"
            _hover={{ bg: "teal.500" }}
            loadingText="Iniciando"
            type="submit"
            size="lg"
          >
            Iniciar Sesión
          </Button>

          <Text align="center">O inicia sesión con:</Text>

          <Button
            bg="red.400"
            color="white"
            _hover={{ bg: "red.500" }}
            onClick={onLoginWithGoogle}
          >
            Iniciar con Google
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

function AuthPage() {
  const isPiloto = true; // Cambia a `false` para mostrar como usuario

  const handleLoginWithGoogle = () => {
    // Lógica para iniciar sesión con Google
  };

  return (
    <div>
      {isPiloto ? (
        <div>
          <h1>Inicio de sesión para Pilotos</h1>
          <LoginForm onLoginWithGoogle={handleLoginWithGoogle} />
        </div>
      ) : (
        <div>
          <h1>Inicio de sesión para Usuarios</h1>
          <LoginForm onLoginWithGoogle={handleLoginWithGoogle} />
        </div>
      )}
    </div>
  );
}

export default AuthPage;