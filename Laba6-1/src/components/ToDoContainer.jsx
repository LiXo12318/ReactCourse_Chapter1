import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';

function ToDoContainer() {
  const { isLoading, data: toDos, setData, error } = useGetAllToDo();
  const [searchValue, setSearchValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleAddToDo = (title) => {
    const newToDo = { id: Date.now(), title };
    setData((prevToDos) => [...prevToDos, newToDo]);
  };

  const handleDelete = (id) => {
    setData((prevToDos) => prevToDos.filter(item => item.id !== id));
  };

  const handleEditClick = (id, title) => {
    setEditingId(id);
    setNewTitle(title);
  };

  const handleSaveEdit = () => {
    setData((prevToDos) =>
      prevToDos.map((item) =>
        item.id === editingId ? { ...item, title: newTitle } : item
      )
    );
    setEditingId(null);
    setNewTitle('');
  };

  const filteredToDo = toDos.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Loader isLoading={isLoading}>
      {error && <ErrorDisplay error={error} />}
      <div className="todo-container">
        <ToDoForm onAdd={handleAddToDo} />
        <SearchBar
          searchValue={searchValue}
          onSearchChange={(e) => setSearchValue(e.target.value)}
        />
        <ToDoList
          toDoItems={filteredToDo}
          onDelete={handleDelete}
          onEditClick={handleEditClick}
          editingId={editingId}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          onSaveEdit={handleSaveEdit}
        />
      </div>
    </Loader>
  );
}

export default ToDoContainer;
