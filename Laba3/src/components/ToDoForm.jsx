import React, { useState } from 'react'

function ToDoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title)
      setTitle('')
    }
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="input-field"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  )
}

export default ToDoForm
