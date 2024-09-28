import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ toDo, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {toDo.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
