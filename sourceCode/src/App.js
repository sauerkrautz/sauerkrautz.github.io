import "./App.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("local"));
    console.table(localStorage);
    if (todos) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    console.table(todo);
  }, [todo]);

  const addTodo = (todos) => {
    localStorage.setItem("local", JSON.stringify([todos, ...todo]));
    console.table(localStorage);
    setTodo([todos, ...todo]);
  };

  const removeTodo = (id) => {
    const filtered = todo.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("local", JSON.stringify(filtered));
    return setTodo(filtered);
  };

  const completeTask = (id) => {
    const mappedTodo = todo.map((e) => {
      if (e.id === id) {
        if (e.completed === false) {
          e.completed = true;
        } else if (e.completed === true) {
          e.completed = false;
        }
      }

      return e;
    });

    setTodo(mappedTodo);
    return localStorage.setItem("local", JSON.stringify(mappedTodo));
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-8 bg-back">
      <Form todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        removeTodo={removeTodo}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
