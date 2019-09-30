import { Action, Reducer } from "redux";
import { ADD_TODO } from "../actions/actionTypes";

export interface ITodoState {
  todos: string[];
}

let initialState: ITodoState = {
  todos: ["apple", "pear"]
};

const todoApp: Reducer<ITodoState> = (
  state = initialState,
  action
): ITodoState => {
  switch (action.type) {
    default:
      console.log(state);
      return state;
  }
};

export default todoApp;
