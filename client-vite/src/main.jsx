import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './services/redux/store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Verificar si hay datos en localStorage
const storedId= localStorage.getItem('id');
const storedAccessToken = localStorage.getItem('accessToken');
const storedUserType = localStorage.getItem('userType');
const storedRedirectPath = localStorage.getItem('redirectPath');
const storedProfileImage = localStorage.getItem('profileImage')
const storedClientId = localStorage.getItem('clientId')
const storedPilotoId = localStorage.getItem('pilotoId')

// Establecer el estado inicial
const userSession = {
  session: {
    id:storedId,
    success: storedAccessToken ? true : false,
    userType: storedUserType || '',
    accessToken: storedAccessToken || '',
    redirectPath: storedRedirectPath || '',
    profileImage: storedProfileImage || '',
    profileId: storedClientId || '',
  },
 };
 console.log(userSession);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
