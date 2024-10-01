import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import SearchBar from './components/SearchBar';
import ToDoList from './components/ToDoList';
import useGetAllToDo from './hooks/useGetAllToDo';

function App() {
  const { isLoading, data: fetchedToDos, error } = useGetAllToDo();
  const [searchValue, setSearchValue] = useState('');
  const [toDo, setToDo] = useState([]);

  // Update local state when fetchedToDos changes
  useEffect(() => {
    if (fetchedToDos) {
      setToDo(fetchedToDos);
    }
  }, [fetchedToDos]);

  const handleAdd = (title) => {
    const newToDo = { id: Date.now(), title };
    setToDo([...toDo, newToDo]);
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
      <ToDoForm onAdd={handleAdd} />
      <SearchBar 
        searchValue={searchValue} 
        onSearchChange={setSearchValue} 
      />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ToDoList toDoItems={filteredToDo} onDelete={handleDelete} />
    </div>
  );
}

export default App;
