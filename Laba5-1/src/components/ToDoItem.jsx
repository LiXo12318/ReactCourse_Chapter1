import React from 'react';

function ToDoItem({ item, onDelete }) {
  return (
    <li className="todo-item">
      <span>{item.title}</span>
      <button onClick={() => onDelete(item.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
