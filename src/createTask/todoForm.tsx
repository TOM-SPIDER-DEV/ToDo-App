import React from "react";
import { TodoContext } from "../todoContext/TodoContext";
import "../app/App.css";
import "./todoForm.css";

function Form() {
  const { inputValue, handleChange, createTodos, cancelTodo } =
    React.useContext(TodoContext);
  return (
    <form onSubmit={() => createTodos(inputValue)}>
      <label>Create new task</label>
      <textarea onChange={handleChange} placeholder="Write your todo here" />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={cancelTodo}
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => {
            createTodos(inputValue);
            cancelTodo();
          }}
          className="TodoForm-button new-task--btn-big"
        >
          <span style={{ padding: "14px 35px" }}>Add</span>
        </button>
      </div>
    </form>
  );
}
export { Form };
