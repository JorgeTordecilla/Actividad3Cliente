import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Swal from "sweetalert2";

import TodoForm from "./TodoForm";
import {
  startRemoveTodo,
  startToggleTodo,
  startUpdateTodo,
} from "../actions/todosActions";

const initState = {
  id: null,
  value: "",
  completed: false,
};

const swalOptions = {
  title: "Quiere Borar esta Tarea?",
  showCancelButton: true,
  confirmButtonText: "Si",
  color: "#decba4 ",
  background: "#3e5151",
};
export const Todo = ({ todos }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(initState);

  const submitUpdate = (value) => {
    dispatch(startUpdateTodo({ id: edit.id, title: value, completed: false }));
    setEdit(initState);
  };

  const handleRemove = (todo) => {
    Swal.fire(swalOptions).then((result) => {
      if (result.isConfirmed) {
        dispatch(startRemoveTodo(todo));
      }
    });
  };

  return edit.id ? (
    <TodoForm edit={edit} onSubmit={submitUpdate} />
  ) : todos.length > 0 ? (
    todos.map((todo) => (
      <div
        className={todo.completed ? "todo-row complete" : "todo-row"}
        key={todo.id}
      >
        <div
          className="todo"
          key={todo.id}
          onClick={() => dispatch(startToggleTodo(todo))}
        >
          {todo.id}. {todo.title}
        </div>
        <div className="icons">
          <AiFillCloseCircle
            onClick={() => handleRemove(todo)}
            className="delete-icon"
          />
          <AiFillEdit
            onClick={() => setEdit({ id: todo.id, value: todo.title })}
            className="edit-icon"
          />
        </div>
      </div>
    ))
  ) : (
    <h2 style={{ color: "whitesmoke" }}>Sin tareas</h2>
  );
};
