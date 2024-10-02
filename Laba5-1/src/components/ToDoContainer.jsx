import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loader from './Loader';

function ToDoContainer() {
  const { isLoading, data: toDos, setData, error } = useGetAllToDo();
  const [searchValue, setSearchValue] = useState('');

  const handleAddToDo = (title) => {
    const newToDo = { id: Date.now(), title };
    setData((prevToDos) => [...prevToDos, newToDo]);
  };

  const handleDelete = (id) => {
    setData((prevToDos) => prevToDos.filter(item => item.id !== id));
  };

  const filteredToDo = toDos.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="todo-container">
      <ToDoForm onAdd={handleAddToDo} />
      <SearchBar
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
      />
      <Loader isLoading={isLoading}>
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ToDoList toDoItems={filteredToDo} onDelete={handleDelete} />
        )}
      </Loader>
    </div>
  );
}

export default ToDoContainer;
