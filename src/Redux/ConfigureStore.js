import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingReducer, { fetchGreeting } from './reducers/GreetingReducer';

const store = configureStore({
  reducer: { greetingReducer },
  middleware: [thunk],
});

store.dispatch(fetchGreeting());

export default store;
