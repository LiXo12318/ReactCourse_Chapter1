import React, { useState } from 'react';

function ToDoItemEdit({ newTitle, setNewTitle, onSaveEdit }) {
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (newTitle.trim() === '') {
      setError(true);
    } else {
      setError(false);
      onSaveEdit();
    }
  };

  return (
    <li className="todo-item">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
          setError(false);
        }}
        className={`input-field edit-field ${error ? 'input-error' : ''}`}
      />
      {error && <div className="error-message">Title is required</div>}
      <div>
        <button onClick={handleSave} className="save-btn">Save</button>
      </div>
    </li>
  );
}

export default ToDoItemEdit;
