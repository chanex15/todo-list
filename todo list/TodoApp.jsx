import ThemeToggle from " ./ThemeToggle";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
  ]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleEditTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // "all"
  });

  return (
    <div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onEdit={handleEditTask}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoApp;