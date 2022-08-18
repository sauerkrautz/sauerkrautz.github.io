import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, removeTodo, getItem }) => {
  // const data = JSON.parse(localStorage.getItem(todo.id));
  // console.log(items);

  return (
    <div className="w-4/5 h-full max-h-[20rem] flex flex-col gap-2 overflow-auto  scrollbar-thin scrollbar-track-main scrollbar-thumb-white px-8">
      {todo.map((el, i) => {
        const item = JSON.parse(localStorage.getItem(el.id));
        return (
          <Todo
            key={todo.id}
            text={el.text}
            id={el.id}
            removeTodo={removeTodo}
            getItem={getItem}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
