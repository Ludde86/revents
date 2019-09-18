import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
  // the (new) state is now stored in the store, via the rootReducer (testReducer), this is passes to the store in -> index.js
  const store = createStore(rootReducer, devToolsEnhancer());

  return store;
};
