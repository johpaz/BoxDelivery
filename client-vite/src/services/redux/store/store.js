import { configureStore } from '@reduxjs/toolkit';
import tipoVehiculo from '../slice/tipoVehiculoSlice';
import session from '../slice/sessionSlice';
import pilotos from '../slice/pilotoSlice';


export const store = configureStore({
  reducer: {
      pilotos,
      session,
      tipoVehiculo,
      
      },
});


