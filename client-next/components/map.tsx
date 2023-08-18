"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LiveMap = () => {
  const initialPosition = [4.6097, -74.0817]; // Coordenadas iniciales de Bogotá

  return (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={initialPosition}>
        <Popup>Ubicación en vivo del piloto</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LiveMap;
