// create reducer function
// fnMap = is called a function map (a map of our functions, that we create in testReducer)
export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
};
