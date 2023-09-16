import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../utils/API/constants";


const initialState = {
    id:"",
    success:"",
    clienteId: "",
    ubicacionInicial: "",
    ubicacionDestino: '',
    tipoVehiculo: '',
    peso: '',
    fotoRecoger:"",
    pagaAlRecoger: false,
    valorAPagar: 0,
    cobraAlEntregar: false,
    valorACobrar: 0,
    mediosDePago: "",
    distanciaRecorrer: "",
    tiempo:"",
    estado: "",
    valorPorDistancia:"",
    valorDelivery: "",
    fotoRecoger: "",
    fotoLlevar:"",
    fotoEntrega: ""
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDeliveryState: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeDeliveryState: () => {
      return initialState;
    },
  },
});

export const { setDeliveryState, removeDeliveryState } = deliverySlice.actions;

export default deliverySlice.reducer;

export const createDelivery = (dataDelivery) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataDelivery),
  };

  const URL = `${API.LOCALHOST}/delivery`; // Make sure API.LOCALHOST is defined

    try {
    const response = await fetch(URL, options);
    const data = await response.json();
      // Dispatch the action with the modified data
    dispatch(setDeliveryState(data));
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

export const getDeliveryId = (id) => async (dispatch) => {
  const options = {
    method: "GET",
    
  };

  const URL = `${API.LOCALHOST}/delivery/${id}`;
  console.log(URL);
    try {
    const response = await fetch(URL, options);
    const data = await response.json();
      // Dispatch the action with the modified data
    dispatch(setDeliveryState(data));
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};