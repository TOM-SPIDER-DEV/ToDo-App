import React from "react";
import { NewTaskBig } from "./createTask/newTask";
import { NewTaskSmall } from "./createTask/newTask";
import { TodoItem } from "./todos/TodoItem";
import { TodoList } from "./todos/TodoList";
import { Modal } from "./createTask/modal";
import { Form } from "./createTask/todoForm";
import "./App.css";
interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos: Todo[];
  if (localStorageTodos === null) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [inputValue, setInputValue] = React.useState("");

  const [todos, setTodos] = React.useState(parsedTodos);

  const saveTodos = (newTodos: Todo[]) => {
    const stringfiedTodo = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringfiedTodo);
    setTodos(newTodos);
  };

  const completeTodos = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodos = (text: string) => {
    const newTodos = [...todos].filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createTodos = (text: string) => {
    const newTodos = [...todos];
    const todo = todos.find((todo) => todo.text === text);
    if (!todo) {
      newTodos.push({ text: text, completed: false });
      saveTodos(newTodos);
    } else {
      alert("You repeat the task's name. Please rename it.");
    }
  };
  const cancelTodo = () => {
    setShowModal(false);
  };

  const [showModal, setShowModal] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <React.Fragment>
      {width > 1024 ? (
        <NewTaskBig
          onCreate={() => createTodos(inputValue)}
          handleChange={handleChange}
        />
      ) : (
        <NewTaskSmall setShowModal={() => setShowModal(!showModal)} />
      )}
      <TodoList tasks={todos}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {showModal && (
        <Modal>
          <Form
            onCreate={() => createTodos(inputValue)}
            handleChange={handleChange}
            onCancel={cancelTodo}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { App };
