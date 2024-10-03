import React from 'react';

function ToDoItem({ item, onDelete, onEditClick, isEditing, newTitle, setNewTitle, onSaveEdit }) {
  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="input-field edit-field"
        />
      ) : (
        <span>{item.title}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={onSaveEdit} className="save-btn">Save</button>
        ) : (
          <button onClick={() => onEditClick(item.id, item.title)} className="edit-btn">Edit</button>
        )}
        <button onClick={() => onDelete(item.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
