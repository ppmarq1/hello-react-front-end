import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return message.greeting ? <h2>{message.greeting}</h2> : null;
};

export default Greeting;
