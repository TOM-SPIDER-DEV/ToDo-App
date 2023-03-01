import React from "react";
import { TodoProvider } from "../todoContext/TodoContext";
import { AppUI } from "./AppUI";
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
