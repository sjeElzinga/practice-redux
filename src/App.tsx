import React from "react";
import { connect, MapStateToProps } from "react-redux";

import { AppState } from "./store/reducers/rootReducer";

import "./App.css";

import TodoPage from "./page/TodoPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoPage />
    </div>
  );
};

export default App;
