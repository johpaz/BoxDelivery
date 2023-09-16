import React, {useState} from 'react';
import {ErrorMessage, Formik, Form, Field } from 'formik';
import {
  FormControl,
  Center,
  Box,
  FormLabel,
  Input,
  Button,
  VStack,
  Checkbox,
  useColorModeValue,
  HStack,
  useToast
} from '@chakra-ui/react';
import VehicleSelection from '../../../singleComponents/vehiculo';
import MapComponent from '../../../singleComponents/map';
import ImageUpload from '../../../singleComponents/imageUpload';
import { useDispatch, useSelector } from 'react-redux';
import MediosPago from '../../../singleComponents/mediosDePago';
import { createDelivery,getDeliveryId } from '../../../services/redux/slice/deliverySlice';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const SolicitudEntrega = () => {
  const iconColor = useColorModeValue('teal.500', 'teal.300');
  const headingColor = useColorModeValue('gray.900', 'gray.100');
  const textColor2 = useColorModeValue('blue.900', 'blue.400');
  const [selectedImageUpload, setSelectedImageUpload] = useState(null);
  const clientId = useSelector((state) => state.session.clienteId);
  const [selectedMedioPago, setSelectedMedioPago] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedOrigin, setSelectedOrigin] =useState(null);
  const [selectedDestino, setSelectedDestino] =useState(null);
  const dispatch = useDispatch()
  const toast = useToast();
  const delivery = useSelector((state)=>state.delivery)
  const navigate = useNavigate();
 
  const initialValues={
    clienteId: clientId,
    ubicacionInicial: [],
    ubicacionDestino: '',
    tipoVehiculo: '',
    peso: '',
    fotoRecoger:"",
    pagaAlRecoger: false,
    valorAPagar: 0,
    cobraAlEntregar: false,
    valorACobrar: 0,
    mediosDePago: "",
  }

  async function handleSubmit(values) {
    try{
      const newData= {
        clienteId: clientId,
        fotoRecoger: selectedImageUpload,
        ubicacionInicial:selectedOrigin,
        ubicacionDestino: selectedDestino,
        tipoVehiculo: selectedVehicle,
        peso: values.peso,
        pagaAlRecoger: values.pagaAlRecoger,
        valorAPagar: values.valorAPagar,
        cobraAlEntregar: values.cobraAlEntregar,
        valorACobrar: values.valorACobrar,
        mediosDePago: selectedMedioPago,
        }
        
        await dispatch(createDelivery(newData))
     
      

  }catch(error){
        console.error(error);
  }
} 
const {id} = useSelector((state)=>state.delivery);
console.log(id);
  
   // Manejar la redirección cuando el estado de sesión cambie
   useEffect(() => {
    if (delivery.success === true) {
      dispatch(getDeliveryId(id));
      navigate('/dashboardClient/delivery');
      toast({
        title: "Envio Creado Con exito",
        description: "¡Sigue tus Envios !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [delivery.success,  navigate, toast]);

  
  return (
    <Box width="100%" bg={useColorModeValue('gray.100', 'gray.800')} p={4}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}

      >
        
        {({ values, handleChange }) => (
          
          <Center>
            <Form>
            <MapComponent   onDirectionsChange={(origen, destino) => {
                setSelectedOrigin(origen);
                setSelectedDestino(destino)}}/>
                          
              <FormControl>
                <FormLabel>Sube la Imagen de tu Carga</FormLabel>
                <ImageUpload name='fotoRecoger' onImageSelect={setSelectedImageUpload}/>
                <ErrorMessage
                  name="fotoRecoger"
                  component="div"
                  style={{ color: "red" }}
                />
              </FormControl>
              <VStack spacing={4}>
                <HStack spacing={4}>
                  <Field name="pagaAlRecoger">
                    {({ field }) => (
                      <FormControl>
                        <Checkbox
                          {...field}
                          isChecked={field.value}
                        >
                          Paga al recoger
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  {values.pagaAlRecoger && (
                    <Field name="valorAPagar">
                      {({ field }) => (
                        <FormControl>
                          <FormLabel>Valor a Pagar:</FormLabel>
                          <Input
                            {...field}
                            type="number"
                            onChange={handleChange}
                          />
                        </FormControl>
                      )}
                    </Field>
                  )}
                </HStack>
                <HStack spacing={4}>               <Field name="cobraAlEntregar">
                  {({ field }) => (
                    <FormControl>
                      <Checkbox
                        {...field}
                        isChecked={field.value}
                      >
                        Cobra al entregar
                      </Checkbox>
                    </FormControl>
                  )}
                </Field>
                {values.cobraAlEntregar && (
                  <Field name="valorACobrar">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel>Valor a Cobrar al Recibir:</FormLabel>
                        <Input
                          {...field}
                          type="number"
                          onChange={handleChange}
                        />
                      </FormControl>
                    )}
                  </Field>
                  
                )}
                </HStack>
                <FormControl>
                  <FormLabel>Peso en Kilos</FormLabel>
                  <Input
                    type="number"
                    name="peso" // Asegúrate de que el nombre sea "peso" para que coincida con initialValues
                    onChange={handleChange}
                    value={values.peso}
                  />
                </FormControl>
               
                 <MediosPago
                  name="medioDePago"
                  onChange={setSelectedMedioPago}
                  
                  />
                
                
                <VehicleSelection 
                name="tipoVehiculo"
                selectedVehiculo={setSelectedVehicle}/>
                <Button type="submit">Solicitar Entrega</Button>
              </VStack>
            </Form>
          </Center>
        )}
      </Formik>
    </Box>
  );
};

export default SolicitudEntrega;
