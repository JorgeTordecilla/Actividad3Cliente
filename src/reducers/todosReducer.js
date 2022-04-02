import { types } from "../types/types";

const initialState = {
  todos: [],
};
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadTodos:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    case types.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.updateTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case types.removeTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case types.toggleTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};
