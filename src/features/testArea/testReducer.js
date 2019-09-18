import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtils";

const initialState = {
  data: 42
};

// the reducer makes a copy of the (init) state, and the action increment the (init) state by 1, and pass the (new) state to the -> store
const incrementCounter = state => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

// this can be used when application becomes larger, using switch can be messy
export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});

/* const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // ...state = returning a new state (object) that contains data, witch is the state.data + 1
      // ...state = data: 42 - new state = data: 43
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
}; */
