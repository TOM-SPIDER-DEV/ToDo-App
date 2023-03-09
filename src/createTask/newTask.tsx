import React from "react";
import { TodoContext } from "../todoContext/TodoContext";
import "../app/App.css";
import "./newTask.css";
import { TodoSvg } from "./todoListSvg";

function NewTask() {
  const {
    inputValue,
    setInputValue,
    handleChange,
    createTodos,
    setShowModal,
    showModal,
    width,
  } = React.useContext(TodoContext);

  const handleButtonClick = () => {
    setInputValue("");
  };

  if (width < 1024) {
    return (
      <button
        className="open-popup--btn"
        onClick={() => setShowModal(!showModal)}
      >
        <span>+</span>
      </button>
    );
  } else {
    return (
      <section className="create-task--big">
        <h1 id="title-task">Create new task</h1>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Write your todo here"
        />
        <button
          type="button"
          onClick={() => {
            createTodos(inputValue);
            handleButtonClick();
          }}
          className="new-task--btn-big"
        >
          <span style={{ padding: "16px 28px" }}>Create task</span>
        </button>

        <TodoSvg />
      </section>
    );
  }
}

export { NewTask };
