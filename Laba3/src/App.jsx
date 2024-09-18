import React, { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [toDo, setToDo] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleAddToDo = (title) => {
    const newToDo = {
      id: Date.now(),
      title,
    }
    setToDo([...toDo, newToDo])
  }

  const handleDeleteToDo = (id) => {
    setToDo(toDo.filter((item) => item.id !== id))
  }

  const filteredToDo = toDo.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoForm onAdd={handleAddToDo} />
      <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToDoList toDo={filteredToDo} onDelete={handleDeleteToDo} />
    </div>
  )
}

export default App
