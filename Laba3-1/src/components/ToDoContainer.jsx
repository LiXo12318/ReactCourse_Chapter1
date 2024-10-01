import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';

function ToDoContainer() {
  const [toDo, setToDo] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleAddToDo = (title) => {
    const newToDo = { id: Date.now(), title };
    setToDo((prevToDo) => [...prevToDo, newToDo]);
  };

  const handleDelete = (id) => {
    setToDo((prevToDo) => prevToDo.filter(item => item.id !== id));
  };

  const filteredToDo = toDo.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="todo-container">
      <ToDoForm onAdd={handleAddToDo} />
      <SearchBar
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
      />
      <ToDoList toDoItems={filteredToDo} onDelete={handleDelete} />
    </div>
  );
}

export default ToDoContainer;
