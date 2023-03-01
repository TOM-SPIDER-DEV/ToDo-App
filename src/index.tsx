import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);

ReactDOM.createPortal(<App />, document.getElementById("modal") as HTMLElement);
