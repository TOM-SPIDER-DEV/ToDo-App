import React from "react";
import "../App.css";
import "./todoForm.css";
interface Props {
  onCancel: () => void;
  onCreate: () => void;
  handleChange: (event: any) => void;
}
function Form(props: Props) {
  return (
    <form onSubmit={props.onCreate}>
      <label>Create new task</label>
      <textarea
        onChange={props.handleChange}
        placeholder="Write your todo here"
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={props.onCancel}
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
        >
          Cancel
        </button>
        {/* <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button> */}
        <button
          type="button"
          onClick={props.onCreate}
          className="TodoForm-button new-task--btn-big"
        >
          <span style={{ padding: "14px 35px" }}>Add</span>
        </button>
      </div>
    </form>
  );
}
export { Form };
