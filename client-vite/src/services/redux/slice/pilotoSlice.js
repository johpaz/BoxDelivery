import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../utils/API/constants";


export const pilotosSlice = createSlice({
  name: "pilotos",
  initialState:{
    pilotos:[]
  },
  reducers: {
    setPilotos: (state, action) => {
      state.pilotos = action.payload;
    },
  },
});

export const { setPilotos } = pilotosSlice.actions;

export default pilotosSlice.reducer;



export const getAllPilotos = () => (dispatch) => {
  const URL = `${API.LOCALHOST}/piloto`
   axios
    .get(URL)
    .then((response) => {
      dispatch(setPilotos(response.data));
    })
    .catch((error) => {
      console.error(error.message);
      // Puedes despachar una acción para manejar el error en el estado si lo deseas.
    });
};
