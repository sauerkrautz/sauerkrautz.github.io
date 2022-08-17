import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todos) => {
    console.table(localStorage);
    setTodo([todos, ...todo]);
  };

  const removeTodo = (id) => {
    localStorage.removeItem(id);
    console.log(localStorage);
    setTodo(
      todo.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-back">
      <div className="w-4/5 md:w-3/5 lg:w-2/5 flex flex-col justify-center rounded-lg items-center gap-8 bg-main shadow-2xl pb-12 mx-12">
        <Form todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList todo={todo} setTodo={setTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
