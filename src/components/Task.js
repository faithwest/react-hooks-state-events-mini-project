import React from "react";

function Task({test, category, onDelete}) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  }

  rreturn (
    <div>
      <span>{text}</span>
      <span>{category}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
