import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, id, completeStatus, date, completeTask, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(id);
  };

  const handleComplete = () => {
    completeTask(id);
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      key={id}
      className="relative bg-white w-full min-h-[10rem] p-2 text-md rounded-lg flex flex-col gap-4 justify-between items-baseline"
      style={{ backgroundColor: completeStatus ? "green" : "white" }}
      onDoubleClick={handleComplete}
    >
      <p
        className="break-words text-left"
        style={{ color: completeStatus ? "white" : "black" }}
      >
        {text}
      </p>
      <div className="w-full flex justify-between">
        <div className="text-gray-500 text-sm">{date}</div>

        <button
          className="text-red-500 tracking-wider p-1 rounded-lg text-md font-poppins font-bold"
          onClick={handleRemove}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </motion.div>
  );
};

export default Todo;
