import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/TodoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// The store object
/**
 * The createStore creates the store with the reducers
 *
 * combineReducers is a helper function to help create and map reducers
 * (when there are multiple available ones)
 */
const store = createStore(
  combineReducers({
    todo: todoReducer
  }),
  // Used for redux-devtools extension of Chrome
  // installation process: npm i --save-dev redux-devtools-extension
  composeWithDevTools()
);

// We export the store to be used by other parts of the program
export default store;
