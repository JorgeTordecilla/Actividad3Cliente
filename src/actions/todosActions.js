import { fetchApi } from "../helpers/fetch";
import { types } from "../types/types";

//Sincrono
export const addTodo = (todo) => ({
  type: types.addTodo,
  payload: todo,
});

export const loadTodos = (todos) => ({
  type: types.loadTodos,
  payload: todos,
});

export const updateTodo = (todo) => ({
  type: types.updateTodo,
  payload: todo,
});

export const removeTodo = (todo) => ({
  type: types.removeTodo,
  payload: todo,
});

export const toggleTodo = (todo) => ({
  type: types.toggleTodo,
  payload: todo,
});

//Asincrono
export const startLoadingTodo = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchApi("todos");
      const body = await resp.json();
      dispatch(loadTodos(body));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddTodo = (todo) => {
  return async (dispatch) => {
    try {
      const resp = await fetchApi("todos", todo, "POST");
      const body = await resp.json();
      dispatch(addTodo(body));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startRemoveTodo = (todo) => {
  return async (dispatch) => {
    try {
      await fetchApi(`todos/${todo.id}`, todo, "Delete");
      dispatch(removeTodo(todo));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startToggleTodo = (todo) => {
  return async (dispatch) => {
    try {
      await fetchApi(`todos/${todo.id}`, { completed: !todo.completed }, "PUT");
      dispatch(toggleTodo(todo));
    } catch (error) {
      console.log(error);
    }
  };
};
export const startUpdateTodo = (todo) => {
  return async (dispatch) => {
    try {
      await fetchApi(
        `todos/${todo.id}`,
        { title: todo.title, completed: todo.completed },
        "PUT"
      );
      dispatch(updateTodo(todo));
    } catch (error) {
      console.log(error);
    }
  };
};
