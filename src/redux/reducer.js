import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../api/api';
import axios from 'axios';

const initialState = {
  user: {},
  token: "",
  email: "",
  error: "",
  data: []
};


export const loginUser = (data) => async (dispatch, getState) => {

  const response = await axios.post(`${baseUrl}/api/auth/login`, data)
  console.log("loginApiRes", response.data)
  if (response.status == 200)
    return dispatch(setAuthStates(response.data))

  else return dispatch(setError(response.data))
}

export const addTlEntry = (data) => async (dispatch, getState) => {

  const response = await axios.post(`${baseUrl}/api/tl/tlEntries`, data)
  console.log("loginApiRes", response.data)
  
  if (response.status == 200)
    return dispatch(setAuthStates(response.data))

  else return dispatch(setError(response.data))
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.email = action.payload.email
    },
    setAuthStates: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUsers, setAuthStates, setError } = userSlice.actions;

export default userSlice;