// Type
// Example: Create
export const CREATE_TODO ="CREATE_TODO";

interface CreateTodo {
    type: "CREATE_TODO";
    payload: string;
}


export type TodoActionTypes = CreateTodo;

// actual action
// Other:
export const createTodo = (textContent: string): TodoActionTypes => ({
    type: CREATE_TODO,
    payload: textContent
})