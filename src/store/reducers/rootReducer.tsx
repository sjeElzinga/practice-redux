import { combineReducers } from "redux";

import helloReducer from "./hello";
import todoApp from "./test";

const rootReducer = combineReducers({
  hello: helloReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
