import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "./modal.css";

function Modal(props: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="modal-background">{props.children}</div>,
    document.getElementById("modal") as HTMLElement
  );
}

export { Modal };
