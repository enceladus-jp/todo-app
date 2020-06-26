import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/TodoReducer";

const store = createStore(
  combineReducers({
    todo: todoReducer
  })
);

export default store;
