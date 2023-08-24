/* eslint-disable camelcase */
import { API } from "../../../utils/API/constants";
import axios from "axios";
import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS,
  //GET_OCUPATION_BY_NAME,
  UPDATE_PROFESIONAL,
  GET_INFO_PROFESIONALS,
  POST_PROFESIONAL,
} from "../actionsTypes/actionsType";

//! Action para obtener a todos los Proveedores/Profesionales
const getAllSuppliers = () => {
  // const URL = `${API.LOCALHOST}/profesional`
  const URL = `${API.DBONLINE}/profesional`;

  return function (dispatch) {
    axios
      .get(URL)
      .then((response) => {
        dispatch({ type: GET_ALL_SUPPLIERS, payload: response.data });
      })
      .catch((error) => console.error(error.message));
  };
};

//! Todas las categorias con su ID
const getAllCategories = () => {
  // const URL = `${API.LOCALHOST}/category`
  const URL = `${API.DBONLINE}/category`;

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        // console.log(results);
        dispatch({
          type: GET_CATEGORIES,
          payload: results,
        });
      })
      .catch((error) => console.error(error.message));
  };
};

//! action para buscar por nombre de profesion //*****Revisar si aun se esta usando si no borrar */
const searchProfessionals = (name) => {
  // const URL = `${API.LOCALHOST}/ocupationsp/?name=${name}`
  const URL = `${API.DBONLINE}/ocupationsp?name=${name}`;

  return function (dispatch) {
    if (name) {
      // Verificar si name no es undefined
      axios
        .get(URL)
        .then((response) => {
          console.info(response.data);
          dispatch({
            type: SEARCH_PROFESSIONALS,
            payload: response.data,
          });
        })
        .catch((error) => console.error(error.message));
    }
  };
};

// const getOcupationsByName = (name) => {
//   const URL = "https://backprofinder-production.up.railway.app/ocupations";
//   return async function (dispatch) {
//     try {
//       let response = await axios.get(`${URL}?name=${name}`);
//       console.log(response.data);
//       if (response.data) {
//         return dispatch({
//           type: GET_OCUPATION_BY_NAME,
//           payload: response.data,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const applyFilters = (objFilters) => {
  return { type: APPLY_FILTERS, payload: objFilters };
};

const postServicio = (info) => {
  // const URL = `${API.LOCALHOST}/postprofesional`
  const URL = `${API.DBONLINE}/postprofesional`;

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
      alert("Publicacion Exitosa!")
     
    } catch (error) {
      console.error(error.response.data.error);
      alert(`${error.response.data.error}`);
    }
  };
};

//! Postear proveedor
const postProveedor = (info) => {
  const userSession = window.localStorage.getItem("userSession");
  if (userSession) {
    const user = JSON.parse(userSession);
    info.id = user.id;
  }

  // const URL = `${API.LOCALHOST}/profesional/${info.id}`
  const URL = `${API.DBONLINE}/profesional/${info.id}`;

  return async function () {
    try {
      // Verificación
      if (
        info.name === "" ||
        info.email === "" ||
        info.image === "" ||
        info.genre === "" ||
        info.years_exp === "" ||
        info.password === "" ||
        info.CountryId === "" ||
        info.LocationId === "" ||
        info.phone === "" ||
        info.ocupations === "" ||
        info.categories === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.put(URL, info, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      
    } catch (error) {
      console.error(error.response.data.error);
      alert(`${error.response.data.error}`);
    }
  };
};

//! Postear cliente
const postCliente = (info) => {
  const userSession = window.localStorage.getItem("userSession");
  if (userSession) {
    const user = JSON.parse(userSession);
    info.id = user.id;
  }

  // const URL = `${API.LOCALHOST}/client/${info.id}`
  const URL = `${API.DBONLINE}/client/${info.id}`;

  return async function () {
    try {
      // Verificación
      if (
        info.name === "" ||
        info.email === "" ||
        info.phone === "" ||
        // info.image === "" ||
        info.password === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.put(URL, info, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    } catch (error) {
      alert(`${error.response.data.error}`);
    }
  };
};

const loginSessionGoogle = () => {
  // const URL = `${API.LOCALHOST}/auth/google`
  const URL = `${API.DBONLINE}/auth/google`;

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

const getSessionUser = (dataSession) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(dataSession),
  };

  return async function () {
    // const URL = `${API.LOCALHOST}/login`
    const URL = `${API.DBONLINE}/login`;

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      data.status =
        data.email && !data.message.includes("No pertenece") ? true : false;
      delete data.password;
      localStorage.setItem("userSession", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
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

  // const URL = `${API.LOCALHOST}/register`
  const URL = `${API.DBONLINE}/register`;

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

//! Traigo profesionales  para renderizar sus post
const getProfesionals = () => {
  // const URL = `${API.LOCALHOST}/profesional`
  const URL = `${API.DBONLINE}/profesional`;

  return async function (dispatch) {
    try {
      let response = await axios.get(`${URL}`);
    //  console.log(response.data);
      if (response.data) {
        return dispatch({
          type: GET_INFO_PROFESIONALS,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//! Actualizar Profesionales
const updateProfesionals = (data, id) => {
  // console.log(id);  // el id llega bien***** falta la data
  // const URL = `${API.LOCALHOST}/profesional/${id}`
  const URL = `${API.DBONLINE}/profesional/${id}`;

  return async function (dispatch) {
    try {
      const response = await axios.put(URL, data);
      if (response && response.data) {
        // console.log(response.data);
        dispatch({
          type: UPDATE_PROFESIONAL,
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
  // const URL = `${API.LOCALHOST}/client`
  const URL = `${API.DBONLINE}/client`;

  return function (dispatch) {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "GET_ALL_CLIENTS", payload: response.data });
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

  // const URL = `${API.LOCALHOST}/client/${newData.id}`
  const URL = `${API.DBONLINE}/client/${newData.id}`;

  return function (dispatch) {
    axios
      .put(URL, newData)
      .then((response) => {
        dispatch({ type: "UPDATE_CLIENT", payload: response.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

export const getPostProfesional = () => {
  // const URL = `${API.LOCALHOST}/profesional`
  const URL = `${API.DBONLINE}/profesional`;

  return async function (dispatch) {
    try {
      const response = await axios.get(URL);
      dispatch({ type: POST_PROFESIONAL, payload: response.data });
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

export {
  getAllSuppliers,
  getAllCategories,
  getAllClients,
  postProveedor,
  applyFilters,
  postCliente,
  //getOcupationsByName,
  getSessionUser,
  postSessionUser,
  loginSessionGoogle,
  searchProfessionals,
  postServicio,
  getProfesionals,
  updateProfesionals,
  updateClient,
  updateFeedback,
  updateFeedbackSuccess,
  updateFeedbackError,
};