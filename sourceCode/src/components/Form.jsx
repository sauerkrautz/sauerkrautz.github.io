import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const Form = ({ todo, addTodo }) => {
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

    const todos = {
      id: uuidv4(),
      text: input,
    };

    if (/[\S\s]+[\S]+/.test(input)) {
      addTodo(todos);
    }

    console.log(todo);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mt-24">
      <motion.input
        type="text"
        value={input}
        ref={INPUT}
        onChange={handleInput}
        placeholder="add todo"
        className="rounded-lg p-2 focus:scale-105 transition-transform"
      />
    </form>
  );
};

export default Form;
