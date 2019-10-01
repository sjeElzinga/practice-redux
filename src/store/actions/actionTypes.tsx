export const ADD_TODOO = "ADD_TODO";

export interface AddTodoAction {
  type: typeof ADD_TODOO;
  payload: string;
}
