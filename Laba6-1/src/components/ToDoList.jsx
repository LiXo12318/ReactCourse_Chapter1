import React from 'react';
import ToDoItemDisplay from './ToDoItemDisplay';
import ToDoItemEdit from './ToDoItemEdit';

function ToDoList({ toDoItems, onDelete, onEditClick, editingId, newTitle, setNewTitle, onSaveEdit }) {
  return (
    <ul className="todo-list">
      {toDoItems.map((item) =>
        item.id === editingId ? (
          <ToDoItemEdit
            key={item.id}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            onSaveEdit={onSaveEdit}
          />
        ) : (
          <ToDoItemDisplay
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEditClick={onEditClick}
          />
        )
      )}
    </ul>
  );
}

export default ToDoList;
