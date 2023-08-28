/* eslint-disable camelcase */
import { API } from "./../../../utils/API/constants";
import axios from "axios";
import {
  SEARCH_PILOTO,
  APPLY_FILTERS,
  UPDATE_PILOTO,
  SOLICITUD_SERVICIO,
  GET_ALL_CLIENTS,
} from "../actionsTypes/actionsType";


//! action para buscar por nombre de profesion //*****Revisar si aun se esta usando si no borrar */
const searchProfessionals = (name) => {
  const URL = `${API.LOCALHOST}/ocupationsp/?name=${name}`
  
  return function (dispatch) {
    if (name) {
      // Verificar si name no es undefined
      axios
        .get(URL)
        .then((response) => {
          console.info(response.data);
          dispatch({
            type: SEARCH_PILOTO,
            payload: response.data,
          });
        })
        .catch((error) => console.error(error.message));
    }
  };
};



const applyFilters = (objFilters) => {
  return { type: APPLY_FILTERS, payload: objFilters };
};

const postServicio = (info) => {
  const URL = `${API.LOCALHOST}/servicio`
  
  return async function () {
    try {
      // Verificación
      if (
        info.title === "" ||
        info.ocupation === "" ||
        info.category === "" ||
        info.image === "" ||
        info.ProfesionalId === "" ||
        info.content === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.post(URL, info, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      alert("Solicitud de servicio Exitosa!")
     
    } catch (error) {
      console.error(error.response.data.error);
      alert(`${error.response.data.error}`);
    }
  };
}



const loginSessionGoogle = () => {
  const URL = `${API.LOCALHOST}/auth/google`
  
  return async function () {
    await fetch(URL)
      .then((response) => {
        if (!response.ok) console.info('google-auth')
      })
      .then((results) => {
        return results;
      })
  };
};



const postSessionUser = (dataSession) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(dataSession),
  };

  const URL = `${API.LOCALHOST}/register`
  

  return async function () {
    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      data.status =
        data.email && !data.message.includes("No pertenece") ? true : false;
      delete data.password;
      window.localStorage.setItem("userSession", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  };
};



//! Actualizar Piloto
const updatePiloto = (data, id) => {
  // console.log(id);  // el id llega bien***** falta la data
  const URL = `${API.LOCALHOST}/piloto/${id}`
  

  return async function (dispatch) {
    try {
      const response = await axios.put(URL, data);
      if (response && response.data) {
        // console.log(response.data);
        dispatch({
          type: UPDATE_PILOTO,
          payload: response.data,
        });
      } else {
        console.log("La respuesta no contiene datos:", response);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};

// Action para obtener todos los clientes
const getAllClients = () => {
   const URL = `${API.LOCALHOST}/cliente`
  

  return function (dispatch) {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: GET_ALL_CLIENTS, payload: response.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

// Action para modificar los datos de un cliente
const updateClient = (clientId, newData) => {
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  //console.log(userSession);
  if (userSession) {
    newData.id = userSession.id;
  }

  const URL = `${API.LOCALHOST}/cliente/${newData.id}`

  return function (dispatch) {
    axios
      .put(URL, newData)
      .then((response) => {
        dispatch({ type: UPDATE_CLIENT, payload: response.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

export const getSolicitudServicio = () => {
  const URL = `${API.LOCALHOST}/servicio`
  

  return async function (dispatch) {
    try {
      const response = await axios.get(URL);
      dispatch({ type: SOLICITUD_SERVICIO, payload: response.data });
    } catch (error) {
      console.error(error.message);
    }
  };
};

// Acción para enviar el feedback al backend
const updateFeedback = (feedbackData) => {
  return async (dispatch) => {
    try {
      // Llamar a la API o endpoint correspondiente para enviar el feedback
      const response = await axios.post(
        "https://backprofinder-production.up.railway.app/review",
        feedbackData
      );

      // Aquí puedes despachar otra acción si lo necesitas, por ejemplo, para actualizar el estado de la aplicación

      // Ejemplo de despacho de una acción de éxito
      dispatch(updateFeedbackSuccess(response.data));
    } catch (error) {
      // Manejar errores si es necesario

      // Ejemplo de despacho de una acción de error
      dispatch(updateFeedbackError(error.message));
    }
  };
};

// Acción para éxito del envío del feedback
const updateFeedbackSuccess = (data) => {
  return {
    type: "UPDATE_FEEDBACK_SUCCESS",
    payload: data,
  };
};

// Acción para error en el envío del feedback
const updateFeedbackError = (error) => {
  return {
    type: "UPDATE_FEEDBACK_ERROR",
    payload: error,
  };
};

const postProveedor = (info) => {
  const userSession = window.localStorage.getItem("userSession");
  if (userSession) {
    const user = JSON.parse(userSession);
    info.id = user.id;
  }

  const URL = `${API.LOCALHOST}/profesional/${info.id}`
  
  return async function () {
    try {
      // Verificación
      if (
        info.name === "" ||
        info.email === "" ||
        info.profileImage === "" ||
        info.password === "" ||
        info.adress === "" ||
        info.phone === "" ||
        info.tipoVehiculo === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.post(URL, info, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      
    } catch (error) {
      console.error(error.response.data.error);
      alert(`${error.response.data.error}`);
    }
  };
};


export {
 
  loginSessionGoogle,
  postProveedor,
};