import { ADD_TODOO, AddTodoAction } from "./actionTypes";

export const addNewTodo = (todo: string): AddTodoAction => {
  return {
    type: ADD_TODOO,
    payload: todo
  };
};
