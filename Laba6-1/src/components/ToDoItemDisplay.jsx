function ToDoItemDisplay({ item, onDelete, onEditClick }) {
    return (
      <li className="todo-item">
        <span>{item.title}</span>
        <div>
          <button onClick={() => onEditClick(item.id, item.title)} className="edit-btn">Edit</button>
          <button onClick={() => onDelete(item.id)} className="delete-btn">Delete</button>
        </div>
      </li>
    );
  }
  export default ToDoItemDisplay;
