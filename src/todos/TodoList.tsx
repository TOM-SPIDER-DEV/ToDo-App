import React from "react";
import { PogressBar } from "./progressBar";
import "../App.css";
import "./TodoList.css";

interface Props {
  className: string;
  id?: string;
}

interface TodoListProps {
  tasks: { text: string; completed: boolean }[];
  children: React.ReactNode;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, children }) => (
  <section className="flex-box--todo-list">
    <h1>My tasks</h1>
    <PogressBar todos={tasks} />
    <section className="task-container"> {children}</section>
  </section>
);

export { TodoList };
