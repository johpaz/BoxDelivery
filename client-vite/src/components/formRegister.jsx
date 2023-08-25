"use client";

import React, { useState,FormEvent } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import GoogleLoginButton from './googleLogin';
import {Button, ButtonGroup} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement );

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('http://localhost:3004/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      

      if (response.ok) {
        console.log('Registro exitoso');
      } else {
        console.error('Error al registrar');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleLogin = async (event:FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('http://localhost:3004/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };
  
    
  return (
    <div className="register-form">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FaUser className="input-icon" />
          <Input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaLock className="input-icon" />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <Input
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="input-container">
          <FaLock className="input-icon" />
          <Input  
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </div>
        <Button type="submit">Iniciar sesión</Button>
      </form>
      <GoogleLoginButton/>
    </div>
  );
};

export default RegisterForm;
