import React from 'react';
import useEditToDo from '../hooks/useEditToDo';

function ToDoItem({ item, onDelete, onEdit }) {
  const {
    isEditing,
    editValue,
    error,
    toggleEditing,
    handleInputChange,
    saveEdit,
  } = useEditToDo(item.title);

  const handleSaveClick = () => {
    const updatedTitle = saveEdit();
    if (updatedTitle !== false) {
      onEdit(item.id, updatedTitle);
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={handleInputChange}
            className={error ? 'input-error' : 'input-field'}
          />
          {error && <p className="error-message">{error}</p>}
          <button onClick={handleSaveClick} className="save-btn">
            Save
          </button>
        </>
      ) : (
        <>
          <span>{item.title}</span>
          <button onClick={toggleEditing} className="edit-btn">
            Edit
          </button>
        </>
      )}
      <button onClick={() => onDelete(item.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
