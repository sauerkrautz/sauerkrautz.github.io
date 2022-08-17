import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, id, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <li
      key={id}
      className="bg-white p-2 text-md rounded-lg shadow-white flex gap-4 justify-between items-center"
    >
      {text}
      <button
        className=" text-red-500 tracking-wider p-1 rounded-lg text-md font-poppins font-bold "
        onClick={handleRemove}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default Todo;
