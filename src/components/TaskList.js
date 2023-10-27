import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks }) {
  // Use a different variable name for the mapped tasks
  const taskComponents = tasks.map((task) => (
    <Task
      key={task.id}       // Use task.id to set the key
      title={task.title}  // Use task.title to set the title
    />
  ));
  
  return (
    <div className="tasks">{taskComponents}</div> // Render the taskComponents
  );
}

export default TaskList;