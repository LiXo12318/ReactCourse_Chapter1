import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import SearchBar from './components/SearchBar';
import useGetAllToDo from './hooks/useGetAllToDo';
import './App.css';

function App() {
  const { isLoading, data: fetchedToDo, error } = useGetAllToDo();
  const [localToDo, setLocalToDo] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (fetchedToDo) {
      setLocalToDo(fetchedToDo);
    }
  }, [fetchedToDo]);

  const handleAddToDo = (title) => {
    const newToDo = {
      id: Date.now(),
      title,
    };
    setLocalToDo([...localToDo, newToDo]);
  };

  const handleDeleteToDo = (id) => {
    setLocalToDo(localToDo.filter((item) => item.id !== id));
  };

  const filteredToDo = localToDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoForm onAdd={handleAddToDo} />
      <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToDoList toDo={filteredToDo} onDelete={handleDeleteToDo} />
    </div>
  );
}

export default App;
