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
  isBigBoss:true
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
  },
});

export const { setUsers, setAuthStates, setError, setData } = userSlice.actions;

export default userSlice;