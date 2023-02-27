import React from "react";
import "../App.css";
import "./newTask.css";
import { TodoSvg } from "./todoListSvg";

interface Props {
  onCreate: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewTaskBig(props: Props) {
  return (
    <section className="create-task--big">
      <h1 id="title-task">Create new task</h1>
      <input type="text" onChange={props.handleChange} />
      <button
        type="button"
        onClick={props.onCreate}
        className="new-task--btn-big"
      >
        <span style={{ padding: "16px 28px" }}>Create task</span>
      </button>

      <TodoSvg />
    </section>
  );
}
function NewTaskSmall(props: { setShowModal: () => void }) {
  return (
    <button className="open-popup--btn" onClick={props.setShowModal}>
      <span>+</span>
    </button>
  );
}

export { NewTaskBig, NewTaskSmall };
