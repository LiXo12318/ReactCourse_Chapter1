import { useState } from 'react';

function useToDo() {
  const [toDo, setToDo] = useState([]);

  const addToDo = (title) => {
    const newToDo = { id: Date.now(), title };
    setToDo([...toDo, newToDo]);
  };

  const deleteToDo = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const filterToDo = (searchValue) => {
    return toDo.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return { toDo, addToDo, deleteToDo, filterToDo };
}

export default useToDo;
