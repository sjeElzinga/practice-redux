import { Action, Reducer } from "redux";

export interface IHello {
  hello: string;
}

let initialState: IHello = {
  hello: "Hello World"
};

const helloReducer = (state = initialState, action: Action): IHello => {
  switch (action.type) {
    default:
      return state;
  }
};

export default helloReducer;
