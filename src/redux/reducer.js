import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../api/api';
import axios from 'axios';
import Cookies from 'js-cookie';

const initialState = {
  user: {},
  token: "",
  email: "",
  error: "",
  data: [],
  isBigBoss:false
};



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
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    isBigBoss: (state, action) => {
      if(action.payload.designation==="bigboss")
          state.isBigBoss = true ;
    },
  },
});

export const { setUsers, setAuthStates, setError, isBigBoss,setData } = userSlice.actions;

export default userSlice;