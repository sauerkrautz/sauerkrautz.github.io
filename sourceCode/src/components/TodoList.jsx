import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, removeTodo, completeTask }) => {
  // const data = JSON.parse(localStorage.getItem(todo.id));
  // console.log(items);

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-auto scrollbar-thin scrollbar-track-main scrollbar-thumb-white px-8">
      {todo.map((el, i) => {
        return (
          <Todo
            key={todo.id}
            text={el.text}
            id={el.id}
            completeStatus={el.completed}
            removeTodo={removeTodo}
            completeTask={completeTask}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
