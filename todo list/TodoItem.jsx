import React, { useState } from "react";

const TodoItem = ({ task, onEdit, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;