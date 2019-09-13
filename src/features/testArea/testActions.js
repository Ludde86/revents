import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

// we need to omport these actions into our component, and then hook these actions up to button so that when we click on them we dispatch these actions,
// which then call the functions inside our reducer, and then update the state accordingly.
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
