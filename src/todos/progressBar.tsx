import React from "react";
import { TodoContext } from "../todoContext/TodoContext";
import "../app/App.css";
import "./progressBar.css";

function PogressBar() {
  const { todos } = React.useContext(TodoContext);
  const averageTasks = () => {
    const totalTasks = todos.length;
    const completeTasks = todos.filter((task) => task.completed).length;
    const completeAverage = (completeTasks / totalTasks) * 100;
    const completeAverageFlat = Number(completeAverage.toFixed());

    return completeAverageFlat;
  };
  let average;
  if (!isNaN(averageTasks())) {
    average = averageTasks();
  } else {
    average = 100;
  }

  const completeTasks = todos.filter((task) => !task.completed).length;
  let taskLeft;
  if (completeTasks) {
    taskLeft = `${completeTasks} tasks left`;
  } else {
    taskLeft = "All the tasks have been completed.";
  }

  const styleProgressBar = {
    position: "absolute" as "absolute",
    left: `${average - 5}%`,
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  };
  return (
    <section>
      <p id="task-left--p">{taskLeft}</p>
      <div className="progress-bar">
        <progress value={average} max="100" />
        <p style={styleProgressBar}>{average}%</p>
      </div>
    </section>
  );
}
export { PogressBar };
