import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, removeTodo, completeTask, crazy, setCrazy }) => {
  // const data = JSON.parse(localStorage.getItem(todo.id));

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 scrollbar-none px-8 mb-8">
      {todo.map((el, i) => {
        return (
          <Todo
            key={el.id}
            text={el.text}
            id={el.id}
            completeStatus={el.completed}
            removeTodo={removeTodo}
            completeTask={completeTask}
            date={el.Dates}
            crazy={crazy}
            setCrazy={setCrazy}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
