import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messageSlice';

const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});

export default store;
