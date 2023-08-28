import React from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
  Select,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";

function FormPiloto({ onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      profileImage: "",
      years_exp: "",
      password: "",
      address: "", // Corregí el typo de "adress" a "address"
      phone: "",
      tipoVehiculo: "",
    },
  });

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.800", "gray.800")}
    >
      <Box
        rounded="lg"
        bg={useColorModeValue("blackAlpha.800", "gray800")}
        boxShadow="lg"
        p={8}
        color="gray.300"
        width={{ base: "90%", sm: "80%", md: "60%", lg: "500px" }}
      >
        <Heading
          fontSize="4xl"
          bgGradient="linear(to-l, teal.300, green.400)"
          bgClip="text"
          align="center"
        >
          REGISTRATE
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" {...register("name")} />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Correo Electrónico</FormLabel>
              <Input type="email" {...register("email")} />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Foto de Perfil</FormLabel>
              <Input type="file" {...register("profileImage")} />
              {errors.profileImage && (
                <span style={{ color: "red" }}>
                  {errors.profileImage.message}
                </span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Años de Experiencia</FormLabel>
              <NumberInput defaultValue={0} min={0} max={100}>
                <NumberInputField {...register("years_exp", { required: true })} />
              </NumberInput>
              {errors.years_exp && (
                <span style={{ color: "red" }}>{errors.years_exp.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" {...register("password")} />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Dirección</FormLabel>
              <Input type="text" {...register("address")} />
              {errors.address && (
                <span style={{ color: "red" }}>{errors.address.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Teléfono</FormLabel>
              <Input type="tel" placeholder="Número de teléfono" {...register("phone")} />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.phone.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Tipo de Vehículo</FormLabel>
              {/* Agrega aquí el componente SelectTipoVehiculo o un Select normal */}
            </FormControl>

            <ButtonGroup justifyContent="center" mt={3}>
              <Button
                bg="teal.400"
                color="white"
                mt={5}
                _hover={{ bg: "teal.500" }}
                loadingText="Registrando"
                type="submit"
                size="lg"
              >
                Registrarme
              </Button>
            </ButtonGroup>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}

export default FormPiloto;
