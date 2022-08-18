import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, id, removeTodo, getItem }) => {
  const handleRemove = () => {
    removeTodo(id);
  };

  const handleGetItem = () => {
    getItem(id);
  };

  // console.log(handleGetItem());

  return (
    <div
      key={id}
      className="bg-white w-full min-h-fit max-w-full p-2 text-md rounded-lg shadow-white flex gap-4 justify-between items-center"
    >
      <p className="break-words">{text}</p>
      <button
        className=" text-red-500 tracking-wider p-1 rounded-lg text-md font-poppins font-bold "
        onClick={handleRemove}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Todo;
