import { TodoActionTypes, CREATE_TODO, DELETE_TODO } from "../actions/Todo";
// Opinion: object/array cloning convenience
import cloneDeep from "lodash.clonedeep";

/**
 * Vocabulary of terms:
 * 1. Store -- The redux store; transcient repository of data (not permanent)
 * 2. State -- The store's state; it describes what the state of the store is
 */

/**
 * Description: The interface that the state will use
 * Opinion: On larger applications, these are usually separated in a different folder named "types"
 *    by convention
 */
export interface Todo {
  contentText: string;
  isDone: boolean;
}

/**
 * The initial state of the app
 * Opinion: This is a useful reference for larger state structures
 *    so that we don't have to declare new objects every time
 */
const initialState: Todo[] = [];

/**
 * The reducer part of Redux
 *
 * Opinion: It is better to make the reducer to be as simple as possible so that logic mixup
 *    would not happen
 *
 * @param state The store's state at the moment of reducer function call
 * @param action The action that is to be processed
 */
export function todoReducer(
  state: Todo[] = initialState,
  action: TodoActionTypes
) {
  switch (action.type) {
    case CREATE_TODO:
      // Simple create TODO action
      state.push({
        isDone: false,
        contentText: action.payload
      });
      // Always return new object so Redux (and its helpers) will know that a new state is available
      return cloneDeep(state);
    case DELETE_TODO:
      state.splice(action.payload, 1);
      return cloneDeep(state);
    default:
      // Always have a default state that returns the original state
      // In case of no default state, Redux will throw errors
      return state;
  }
}
