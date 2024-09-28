import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import SearchBar from './components/SearchBar';
import useGetAllToDo from './hooks/useGetAllToDo';
import './App.css';
import Loading from './components/Loading';

function App() {
  const { isLoading: isFetching, data: fetchedToDo, error } = useGetAllToDo();
  const [loading, setLoading] = useState(true);
  const [localToDo, setLocalToDo] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Імітація завантаження для 3 секунд
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Очищення таймера при демонтажі
  }, []);

  useEffect(() => {
    if (fetchedToDo) {
      setLocalToDo(fetchedToDo.slice(0, 10)); // Наприклад, обмежимо до 10 елементів
    }
  }, [fetchedToDo]);

  // Відображення лоадера під час імітації завантаження
  if (loading || isFetching) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleAddToDo = (title) => {
    const newToDo = { id: Date.now(), title };
    setLocalToDo([...localToDo, newToDo]);
  };

  const handleDeleteToDo = (id) => {
    setLocalToDo(localToDo.filter((item) => item.id !== id));
  };

  const handleEditToDo = (id, newTitle) => {
    setLocalToDo(
      localToDo.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  const filteredToDo = localToDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoForm onAdd={handleAddToDo} />
      <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToDoList toDo={filteredToDo} onDelete={handleDeleteToDo} onEdit={handleEditToDo} />
    </div>
  );
}

export default App;
