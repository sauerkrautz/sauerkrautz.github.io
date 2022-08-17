import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, removeTodo }) => {
  console.log(todo);
  return (
    <ul className="w-4/5 h-full max-h-[20rem] flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-track-main scrollbar-thumb-white px-8">
      {todo.map((el) => {
        return (
          <Todo
            key={todo.id}
            text={el.text}
            id={el.id}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
