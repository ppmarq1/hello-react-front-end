import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetingReducer);

  return (
    <div>
      <div>
        <h1>{greetings.greeting}</h1>
      </div>
    </div>

  );
};
export default Greeting;
