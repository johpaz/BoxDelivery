import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../utils/API/constants";


export const tipoVehiculoSlice = createSlice({
  name: "tipoVehiculo",
  initialState:{
    tipoVehiculo:[]
  },
  reducers: {
    setTipoVehiculo: (state, action) => {
      state.tipoVehiculo = action.payload;
    },
  },
});

export const { setTipoVehiculo } = tipoVehiculoSlice.actions;

export default tipoVehiculoSlice.reducer;

export const getAllTipoVehiculo = () => (dispatch) => {
  const URL = `${API.LOCALHOST}/tipovehiculo`
   axios
    .get(URL)
    .then((response) => {
      dispatch(setTipoVehiculo(response.data));
    })
    .catch((error) => {
      console.error(error.message);
      // Puedes despachar una acción para manejar el error en el estado si lo deseas.
    });
};
