import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <p>{task.text}</p>
          <p>{task.category}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
