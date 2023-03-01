import React from "react";
interface Todo {
  text: string;
  completed: boolean;
}

function useLocalStorage() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos: Todo[];
  if (localStorageTodos === null) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = React.useState(parsedTodos);

  const saveTodos = (newTodos: Todo[]) => {
    const stringfiedTodo = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringfiedTodo);
    setTodos(newTodos);
  };

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    todos,
    saveTodos,
    width,
  };
}
export { useLocalStorage };
