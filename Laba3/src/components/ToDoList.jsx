import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ toDoItems, onDelete }) {
  return (
    <ul className="todo-list">
      {toDoItems.map((item) => (
        <ToDoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ToDoList;
