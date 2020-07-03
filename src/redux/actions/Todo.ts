// Type constants are here
/**
 *  Description: For convenienve purposes, we declare action type as constants so we
 *       do not need to type/copy action type everytime and/or have error caused by
 *       mis-type
 */
export const CREATE_TODO = "CREATE_TODO";

// Action interfaces are here
/**
 *  Description: So we know the structure of the actions that we need to use
 *      and to know what to expect when calling a particular action
 */
interface CreateTodo {
  type: "CREATE_TODO";
  payload: string;
}

// Union type here
// TODO: other types
/**
 *  Description: For convenience sake, we export the different action types as a
 *      single type.
 *  Opinion: Union types are very convenient to use, not only in React/Redux. This is
 *      a good way to avoid `any` type. You can check Typescript site for details of this
 */
export type TodoActionTypes = CreateTodo;

// Actual action object/function here
/**
 * Description: These are the actions that will be called by the "dispatch" operation
 *      It tells what type the action is and what data it carries (if any)
 * Opinion: The use of "payload" property name is optional. This is only because old Redux/NGRX
 *      framework use it as convention so I use it. (I used Redux/NGRX when it was released)
 */
export const createTodo = (textContent: string): TodoActionTypes => ({
  type: CREATE_TODO,
  payload: textContent
});
