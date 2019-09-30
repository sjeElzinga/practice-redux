import React from "react";
import { connect, MapStateToProps } from "react-redux";

import { AppState } from "./store/reducers/rootReducer";
import { IHello } from "./store/reducers/hello";

import "./App.css";

interface IProps {
  hello: IHello;
}

type Props = {} & IProps;

const App: React.FC<Props> = props => {
  console.log(props.hello);
  return <div className="App">Hello</div>;
};

const mapStateToProps = (state: AppState) => ({
  hello: state.hello
});

export default connect(
  mapStateToProps,
  null
)(App);
