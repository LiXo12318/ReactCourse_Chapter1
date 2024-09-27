import React from 'react'

function ToDoList({ toDo, onDelete }) {
  return (
    <ul className="todo-list">
      {toDo.map((item) => (
        <li key={item.id} className="todo-item">
          <span>{item.title}</span>
          <button onClick={() => onDelete(item.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList
