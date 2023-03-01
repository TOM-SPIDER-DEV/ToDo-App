import React from "react";
import { TodoContext } from "../todoContext/TodoContext";
import { PogressBar } from "./progressBar";
import { TodoItem } from "./TodoItem";
import "../app/App.css";
import "./TodoList.css";

const TodoList = () => {
  const { todos } = React.useContext(TodoContext);
  return (
    <section className="flex-box--todo-list">
      <h1>My tasks</h1>
      <PogressBar />
      <section className="task-container">
        {todos?.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </section>
    </section>
  );
};

export { TodoList };
