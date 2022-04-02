import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddTodo, startLoadingTodo } from "../actions/todosActions";

import TodoForm from "./TodoForm";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingTodo());
  }, [dispatch]);

  const addTodoHandler = (input) => {
    dispatch(
      startAddTodo({
        title: input,
        completed: false,
      })
    );
  };
  return (
    <>
      <h1>En que estas pensando?</h1>
      <TodoForm onSubmit={addTodoHandler} />
      <Todo todos={todos} />
    </>
  );
};
