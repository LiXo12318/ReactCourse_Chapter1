import React, { useState } from 'react';
import './App.css';

const ToDoForm = ({ title, onTitleChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="todo-form">
    <input
      type="text"
      value={title}
      onChange={onTitleChange}
      placeholder="Add a new task"
      className="input-field"
    />
    <button type="submit" className="add-btn">Add</button>
  </form>
);

const SearchBar = ({ searchValue, onSearchChange }) => (
  <input
    type="text"
    value={searchValue}
    onChange={onSearchChange}
    placeholder="Search tasks"
    className="input-field search-field"
  />
);

const ToDoList = ({ todos, onDelete }) => (
  <ul className="todo-list">
    {todos.map(item => (
      <li key={item.id} className="todo-item">
        <span>{item.title}</span>
        <button onClick={() => onDelete(item.id)} className="delete-btn">Delete</button>
      </li>
    ))}
  </ul>
);

function App() {
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newToDo = { id: Date.now(), title };
      setToDo([...toDo, newToDo]);
      setTitle('');
    }
  };

  const handleDelete = (id) => {
    setToDo(toDo.filter(item => item.id !== id));
  };

  const filteredToDo = toDo.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoForm 
        title={title} 
        onTitleChange={e => setTitle(e.target.value)} 
        onSubmit={handleSubmit} 
      />
      <SearchBar 
        searchValue={searchValue} 
        onSearchChange={e => setSearchValue(e.target.value)} 
      />
      <ToDoList todos={filteredToDo} onDelete={handleDelete} />
    </div>
  );
}

export default App;
