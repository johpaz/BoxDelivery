import { configureStore } from '@reduxjs/toolkit';
import tipoVehiculo from '../slice/tipoVehiculoSlice';
import session from '../slice/sessionSlice';
import pilotos from '../slice/pilotoSlice';
import profile from '../slice/profileSlice';
import delivery from '../slice/deliverySlice';

export const store = configureStore({
  reducer: {
      pilotos,
      session,
      tipoVehiculo,
      profile,
      delivery
      },
});


