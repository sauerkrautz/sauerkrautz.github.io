import "./App.css";
import Form from "./components/Form";
import { useEffect, useMemo, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [crazy, setCrazy] = useState(false);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("local"));
    console.table(localStorage);
    if (todos) {
      setTodo(todos);
    }
  }, []);

  // useEffect(() => {
  //   console.table(todo);
  // }, [todo]);

  const memoTodo = useMemo(() => {
    return todo;
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

  const editTodo = (id, input) => {
    const editedTodo = todo.map((e) => {
      if (e.id === id) {
        e.text = input;
      }

      return e;
    });

    setTodo(editedTodo);
    localStorage.setItem("local", JSON.stringify(editedTodo));
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-8 bg-secback ">
      <Form
        todo={memoTodo}
        setTodo={setTodo}
        addTodo={addTodo}
        crazy={crazy}
        setCrazy={setCrazy}
      />
      <TodoList
        todo={memoTodo}
        setTodo={setTodo}
        removeTodo={removeTodo}
        completeTask={completeTask}
        editTodo={editTodo}
        crazy={crazy}
        setCrazy={setCrazy}
      />
      {/* <Test /> */}
    </div>
  );
}

export default App;
