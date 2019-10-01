import { ADD_TODOO, AddTodoAction } from "../actions/actionTypes";

export interface ITodoState {
  todos: string[];
}

let initialState: ITodoState = {
  todos: ["apple"]
};

const todoReducer = (
  state = initialState,
  action: AddTodoAction
): ITodoState => {
  switch (action.type) {
    case ADD_TODOO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export default todoReducer;
