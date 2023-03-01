import React from "react";
import { useLocalStorage } from "./localStorage";
interface Todo {
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  inputValue: string;

  todos: Todo[];
  saveTodos: (newTodos: Todo[]) => void;
  completeTodos: (text: string) => void;
  deleteTodos: (text: string) => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  createTodos: (text: string) => void;
  cancelTodo: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

const TodoContext = React.createContext<TodoContextProps>(
  {} as TodoContextProps
);

function TodoProvider(props: { children: React.ReactNode }) {
  const { todos, saveTodos } = useLocalStorage();

  const [inputValue, setInputValue] = React.useState("");

  const completeTodos = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodos = (text: string) => {
    const newTodos = [...todos].filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
    <TodoContext.Provider
      value={{
        inputValue,
        todos,
        saveTodos,
        completeTodos,
        deleteTodos,
        handleChange,
        createTodos,
        cancelTodo,
        showModal,
        setShowModal,
        width,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
