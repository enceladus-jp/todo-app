import { TodoActionTypes, CREATE_TODO } from "../actions/Todo";

interface Todo {
  contentText: string;
  isDone: boolean;
}

const initialState: Todo[] = [];

export function todoReducer(state: Todo[] = initialState, action: TodoActionTypes) {
  switch (action.type) {
    case CREATE_TODO:
      break;
    default:
        return state;
  }
}
