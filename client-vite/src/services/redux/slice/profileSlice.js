import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../utils/API/constants";


const initialState = {
  success:"",
  redirectPath:"",
  userType: "",
  success: false,
  profileImage:"",
  clienteId:"",
  pilotoId:"",

};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileState: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateProfileState: () => {
      return initialState;
    },
  },
});

export const { setProfileState, updateprofileState } = profileSlice.actions;

export default profileSlice.reducer;


export const registerProfileClient = (dataRegistration) => async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRegistration),
    };
  
    const URL = `${API.LOCALHOST}/profile`; // Replace with your registration URL
  
    try {
      const response = await fetch(URL, options);
     
      const data = await response.json();
      console.log(data);
      
      // Assuming the registration response is similar to login response
      if (data.success) {
        dispatch(setProfileState(data)); // Update the session state
      } else {
        // Handle the registration failure if needed
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
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
  