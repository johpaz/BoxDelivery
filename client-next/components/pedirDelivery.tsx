"use client";

import React, { useState,FormEvent } from 'react';

const SolicitudEntrega = () => {
  const [ubicacionInicial, setUbicacionInicial] = useState('');
  const [ubicacionDestino, setUbicacionDestino] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [peso, setPeso] = useState('');
  const [pagaAlRecoger, setPagaAlRecoger] = useState(false);
  const [valorAPagar, setValorAPagar] = useState(0);
  const [cobraAlEntregar, setCobraAlEntregar] = useState(false);
  const [valorACobrar, setValorACobrar] = useState(0);
  const [mediosDePago, setMediosDePago] = useState([]);
  const [fotoRecoger, setFotoRecoger] = useState(null);

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();
    // Aquí puedes enviar los datos al backend o hacer otras operaciones
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ubicación Inicial:
        <input
          type="text"
          value={ubicacionInicial}
          onChange={(e) => setUbicacionInicial(e.target.value)}
        />
      </label>
      <label>
        Ubicación Destino:
        <input
          type="text"
          value={ubicacionDestino}
          onChange={(e) => setUbicacionDestino(e.target.value)}
        />
      </label>
      {/* Agrega los campos restantes aquí */}
      <button type="submit">Solicitar Entrega</button>
    </form>
  );
};

export default SolicitudEntrega;
