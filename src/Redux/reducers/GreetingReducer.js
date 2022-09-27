import Axios from 'axios';

const ADD_GREETINGS = 'ADD_GREETINGS';

const addGreets = (greeting) => ({
  type: ADD_GREETINGS,
  payload: greeting,
});

export const fetchGreeting = () => async (dispatch) => {
  try {
    const greets = await Axios.get('http://localhost:3000/greetings');
    dispatch(addGreets(greets.data));
  } catch (error) {
    error(error);
  }
};

const initialState = {};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GREETINGS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
