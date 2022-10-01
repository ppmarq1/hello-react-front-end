import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: [],
};

export const fetchGreeting = createAsyncThunk('message/fetchGreeting', () => axios.get('http://127.0.0.1:3000/api/v1/greetings').then((response) => response.data));

const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.message = action.payload;
    });
  },
});

export default messageSlice.reducer;
