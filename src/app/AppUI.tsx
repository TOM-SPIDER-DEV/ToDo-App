import React from "react";
import { NewTask } from "../createTask/newTask";
import { TodoList } from "../todos/TodoList";
import { Modal } from "../createTask/modal";
import "./App.css";

function AppUI() {
  return (
    <React.Fragment>
      <NewTask />
      <TodoList />
      <Modal />
    </React.Fragment>
  );
}

export { AppUI };
