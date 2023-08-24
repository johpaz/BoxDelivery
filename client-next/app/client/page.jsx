"use client";
import axios from "axios"
import React, { useState } from "react";
import {
  Button,
  Avatar,
  Chip,
  Checkbox,
  Textarea,
  Input,
  Switch,
  Accordion,
  AccordionItem,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  CheckboxGroup
} from '@nextui-org/react';
import { title } from "@/components/primitives";
import MapComponent from '@/components/mapas/map.jsx';
import { FaTruckMoving, FaTruckPickup, FaMotorcycle, FaCaravan } from 'react-icons/fa';
import ImageUpload from "../../components/imagen"
import VehicleSelections from "../../components/vehiculo"
import MediosPago from '@/components/mediosDePago'



const DashboardCliente = () => {
  const clienteId = '64de844c8462e0bf59cb3801'
  const  [ubicacionInicial,setUbicacionInicial] = useState();
  
  const formData = {
     ubicacionInicial: {},
    ubicacionDestino: {},
    tipoVehiculo: '',
    peso: '',
    mediosDePago: '',
    pagaAlRecoger: '', 
    valorAPagar: '',
    cobraAlEntregar: '',
    valorACobrar: '',
    mediosDePago: '',
    fotoRecoger: '',
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apikey = process.env.API_BASE_URL;
    try {
      // Realiza la solicitud POST con los datos del formulario
      const response = await axios.post('http://localhost:3004/delivery', formData);
      console.log('Respuesta de la solicitud:', response.data);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };
  
  
  //const selectedMediosPago = mediosPagoRef.current.getSelectedMediosPago(); // Llamar a la función de MediosPago

  return (
    <section >
      <div className="flex  text-center">
        <h1 className={title()}>Dashboard del Cliente</h1>
        <div className="mt-4">
          <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        </div>
      </div>
      
      <form  onSubmit={handleFormSubmit}>
      <Divider orientation="vertical" />
      <section>
        
        <div>
        <MapComponent/>
        </div>
      </section>
      <Divider orientation="vertical" />    
     
     
        <div >
          <div className="w-1/2">
            <Input label="Peso" placeholder="Peso en kg" type="number" />
          </div>
          <div className="w-1/4">
            <Popover placement="right">
              <PopoverTrigger>
                <Button>Paga Al Recoger</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Valor a Pagar en la recogida</div>
                  
                </div>
              </PopoverContent>
            </Popover>
            <Switch defaultSelected aria-label="Paga al Recoger" color="success" />
            <Input type="text" placeholder="Escribe el valor a Pagar" />
          </div>
          <div className="w-1/4">
            <Popover placement="right">
              <PopoverTrigger>
                <Button>Cobra Al Entregar</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Valor a cobrar en la recogida</div>
                </div>
              </PopoverContent>
            </Popover>
            <Switch defaultSelected aria-label="Cobra al Entrega" color="success"/>
            <Input type="text" placeholder="Escribe el valor a Cobrar" />
          </div>
        </div>
        <Divider />
        <VehicleSelections/>
        <MediosPago />
        <Divider />
        <Textarea>Valor Distancia: ...</Textarea>
     
    <ImageUpload/>
      <Button type="submit" variant="solid" color="success">
          Solicitar Servicio
      </Button>
      </form>
    </section>
  );
};

export default DashboardCliente;
