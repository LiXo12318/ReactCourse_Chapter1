import { useState } from 'react';

const useEditToDo = (initialTitle) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(initialTitle);
  const [error, setError] = useState('');

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setError('');
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const saveEdit = () => {
    if (editValue.trim() === '') {
      setError('Title is required');
      return false;
    }
    setIsEditing(false);
    return editValue;
  };

  return {
    isEditing,
    editValue,
    error,
    toggleEditing,
    handleInputChange,
    saveEdit,
  };
};

export default useEditToDo;
