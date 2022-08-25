import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, removeTodo, completeTask }) => {
  // const data = JSON.parse(localStorage.getItem(todo.id));
  // console.log(items);

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 scrollbar-none px-8 mb-8">
      {todo.map((el, i) => {
        return (
          <Todo
            key={todo.id}
            text={el.text}
            id={el.id}
            completeStatus={el.completed}
            removeTodo={removeTodo}
            completeTask={completeTask}
            date={el.Dates}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
