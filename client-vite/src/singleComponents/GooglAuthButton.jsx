import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE } from '../utils/API/constants';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { registerUser } from '../services/redux/slice/sessionSlice'; 

export default function GoogleAuthButton({ setValue }) {
  const CLIENT_ID = `${GOOGLE.CLIENT_ID}`;
  const dispatch = useDispatch();

  const handleGoogleLogin = async (credentialResponse,setValue) => {
    try {
      // Decodificar la respuesta de Google
      const decoded = jwt_decode(credentialResponse.credential);
      console.log(decoded);
      // Crear un objeto con los datos del formulario y la respuesta de Google
      const dataSession = {
        email: decoded.email,
        password: decoded.name, // Contraseña temporal o generada
        userType: setValue, // Ajusta según la lógica de tu aplicación
      };

      // Enviar los datos al servidor para autenticación
      await dispatch(registerUser(dataSession));
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      ;
    </GoogleOAuthProvider>
  );
}
