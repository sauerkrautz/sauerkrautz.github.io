import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, id, completeStatus, completeTask, removeTodo }) => {
  useEffect(() => {
    console.table(id);
    console.table(completeStatus);
  }, []);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleComplete = () => {
    completeTask(id);
  };

  const d = new Date().toDateString;

  return (
    <div
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
        <div></div>

        <button
          className="text-red-500 tracking-wider p-1 rounded-lg text-md font-poppins font-bold"
          onClick={handleRemove}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
