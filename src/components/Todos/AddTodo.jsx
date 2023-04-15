import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddTodo = ({ addNewTask }) => {

  const [task, setTask] = useState('');

  const handleOnChangeToAdd = (e) => {
    setTask(e.target.value);
  }

  const handleClickAdd = () => {
    if (!task) return;
    const todo = {
      id: crypto.randomUUID(),
      title: task
    }
    addNewTask(todo);
    setTask('');
  }
  
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => handleOnChangeToAdd(e)}
      />
      <button onClick={handleClickAdd}>Add Task</button>
    </div>
  )

}

export default AddTodo