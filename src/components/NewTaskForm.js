import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (details.trim() === "") {
      return; // Prevent adding empty tasks
    }

    onTaskFormSubmit({
      text: details,
      category: category,
    });

    // Clear form fields
    setDetails("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Details:
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          aria-label="Details"
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
