import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/toast';
import { useSelector } from 'react-redux';

export const useCredentials = () => {
  const navigate = useNavigate();
  const sessionState = useSelector((state) => state.session); // Estado de la sesión
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  
  // Opciones de tipos de usuario
  const userTypes = [
    { name: 'Cliente' },
    { name: 'Piloto' }
  ];

  // Estado para controlar el tipo de usuario seleccionado
  const [usuario, setUser] = useState('Tipo de usuario');
  const [userRol, setUserRol] = useState('');
  const [errorRol, setErrorRol] = useState(false);

  // Función para manejar la selección del tipo de usuario
  function handleSelectUser(event) {
    const { name } = event.target;
    setUser(name);
    setErrorRol(false);

    // Mappeamos el tipo de usuario a un rol específico
    const userTypeToRole = {
      'Cliente': 'cliente',
      'Piloto': 'piloto'
    };
    
    setUserRol(userTypeToRole[name]);
  }

  // Función para manejar la sesión del usuario
  function handleUserSession(successTitle, errorTitle) {
    if (sessionState.success) {
      toast({
        title: successTitle,
        description: sessionState.message,
        status: 'success',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true
      });
      
      // Redirección según el tipo de usuario
      if (sessionState.userType === 'cliente') {
        navigate('/FormClient');
      } else if (sessionState.userType === 'piloto') {
        navigate('/FormPiloto');
      }
      // Agregar otras redirecciones según los tipos de usuario necesarios
      
    } else {
      toast({
        title: errorTitle,
        description: sessionState.message || sessionState.error,
        status: 'error',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true
      });
      // Limpiar el estado de la sesión
      window.localStorage.removeItem('userSession');
    }
  }

  return {
    userTypes,
    usuario,
    userRol,
    errorRol,
    setErrorRol,
    showPassword,
    setShowPassword,
    handleSelectUser,
    handleUserSession
  };
};
