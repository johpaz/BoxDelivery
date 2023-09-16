import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../utils/API/constants";


const initialState = {
  id: "",
  clienteId:"",
  pilotoId:"",
  message: "",
  accessToken:"",
  redirectPath:"",
  success: false,
  userType: "",
  profileImage:""
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionState: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeSessionState: () => {
      return initialState;
    },
  },
});

export const { setSessionState, removeSessionState } = sessionSlice.actions;

export default sessionSlice.reducer;

export const loginSessionUser = (dataSession) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataSession),
  };

  const URL = `${API.LOCALHOST}/login`; // Make sure API.LOCALHOST is defined

    try {
    const response = await fetch(URL, options);
    const data = await response.json();
      // Dispatch the action with the modified data
    dispatch(setSessionState(data));
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

export const registerUser = (dataRegistration) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRegistration),
  };

  const URL = `${API.LOCALHOST}/user`; // Replace with your registration URL

  try {
    const response = await fetch(URL, options);
   
    const data = await response.json();
    
    // Assuming the registration response is similar to login response
    if (data.success) {
      dispatch(setSessionState(data)); // Update the session state
    } else {
      // Handle the registration failure if needed
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

export const loginSessionGoogle = () => async (dispatch)=>{
  const URL = `${API.LOCALHOST}/auth/google`
    await fetch(URL)
      .then((response) => {
        if (!response.ok) console.info('google-auth')
      })
      .then((results) => {
        return results;
      })
};