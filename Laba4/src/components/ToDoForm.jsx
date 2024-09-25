import React, { useState } from 'react'

function ToDoForm({ onAdd, buttonText = 'Add', placeholder = 'Enter task', initialValue = '' }) {
  const [title, setTitle] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title)
      setTitle('') // Очищення поля після додавання
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
        placeholder={placeholder} 
        className="input-field"
      />
      <button type="submit" className="add-btn">
        {buttonText} 
      </button>
    </form>
  )
}

export default ToDoForm
