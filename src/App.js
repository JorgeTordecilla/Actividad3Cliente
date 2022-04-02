import { Provider } from "react-redux";
import { store } from "./store/store";
import { TodoList } from "./components/TodoList";
import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
