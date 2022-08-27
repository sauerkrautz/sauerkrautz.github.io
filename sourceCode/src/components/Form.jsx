import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ todo, addTodo }) => {
  const d = new Date();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    return setInput(e.target.value);
  };

  const INPUT = useRef();

  useEffect(() => {
    INPUT.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = `${d.toLocaleTimeString()}   ${d.toLocaleDateString()}`;

    const todos = {
      id: uuidv4(),
      text: input,
      completed: false,
      Dates: date,
    };

    if (/[\S\s]+[\S]+/.test(input)) {
      addTodo(todos);
    }

    console.log(todo);
    setInput("");
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" w-2/6 flex justify-center gap-4 mt-24 pb-4"
      >
        <input
          type="text"
          value={input}
          ref={INPUT}
          onChange={handleInput}
          placeholder="add todo"
          className="w-3/4 rounded-lg p-2 focus:scale-105 transition-transform"
        />
      </form>
    </div>
  );
};

export default Form;
