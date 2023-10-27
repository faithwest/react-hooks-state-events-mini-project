import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", category: "Category1" },
    { id: 2, text: "Task 2", category: "Category2" },
    { id: 3, text: "Task 3", category: "Category1" },
    { id: 4, text: "Task 4", category: "Category3" },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const categories = ["Category1", "Category2", "Category3", "All"];

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.category === selectedCategory);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div>
      <CategoryFilter
        categories={categories}
        tasks={tasks}
        onCategoryChange={handleCategoryChange}
      />
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
