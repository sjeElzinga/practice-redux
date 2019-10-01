import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../store/reducers/rootReducer";

const TodoPage: React.FC = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state: AppState) => state.todos.todos);
  const dispatch = useDispatch();

  const renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo, idx) => <li key={idx}>{todo}</li>);
    }
  };

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  return (
    <React.Fragment>
      <h1>Todo's</h1>
      <form onSubmit={onSubmitHandler}>
        <input value={todo} onChange={onChangeHandler}></input>
      </form>
      <div>
        <ul>{renderTodos()}</ul>
      </div>
    </React.Fragment>
  );
};

export default TodoPage;
