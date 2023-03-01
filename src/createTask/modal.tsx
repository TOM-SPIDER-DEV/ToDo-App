import React from "react";
import ReactDOM from "react-dom";
import "../app/App.css";
import { TodoContext } from "../todoContext/TodoContext";
import { Form } from "./todoForm";
import "./modal.css";

function Modal() {
  const { showModal } = React.useContext(TodoContext);
  return showModal
    ? ReactDOM.createPortal(
        <div className="modal-background">
          <Form />
        </div>,
        document.getElementById("modal") as HTMLElement
      )
    : null;
}

export { Modal };
