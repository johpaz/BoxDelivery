"use  client";

// src/components/ClienteComponent.js
import React, { useState, useEffect } from 'react';
import { getServiciosActivos, tomarDelivery } from '../app/api/api';

const ClienteComponent = () => {
  const [serviciosActivos, setServiciosActivos] = useState([]);

  useEffect(() => {
    const fetchServiciosActivos = async () => {
      try {
        const servicios = await getServiciosActivos();
        setServiciosActivos(servicios);
      } catch (error) {
        console.error('Error al obtener los servicios activos:', error);
      }
    };

    fetchServiciosActivos();
  }, []);

  const handleTomarDelivery = async (deliveryId) => {
    try {
      await tomarDelivery(deliveryId);
      const servicios = await getServiciosActivos();
      setServiciosActivos(servicios);
    } catch (error) {
      console.error('Error al tomar el delivery:', error);
    }
  };

  return (
    <div>
      {serviciosActivos.map((servicio) => (
        <div key={servicio.id}>
          <p>Ubicación Inicial: {servicio.ubicacionInicial}</p>
          <p>Ubicación Destino: {servicio.ubicacionDestino}</p>
          <button onClick={() => handleTomarDelivery(servicio.id)}>Tomar Delivery</button>
        </div>
      ))}
    </div>
  );
};

export default ClienteComponent;
