import React, { useState } from 'react';
import './ListTodo.scss'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

const ListTodo = () => {

  const [listTodo, setListTodo] = useState([]);
  //appear when click edit
  const [editTodo, setEditTodo] = useState({});

  const addNewTask = (todo) => {
    setListTodo([...listTodo, todo]);
    toast.success('Successfully added!')
  }

  const handleClickDelete = (id) => {
    setListTodo(currListTodo => currListTodo.filter(todo => todo.id !== id));
    toast.success('Successfully deleted!');
  }

  const handleClickEditSave = (todo) => {
    //edit
    setEditTodo(todo)

    //save
    const isEditTodoEmpty = Object.keys(editTodo).length === 0;
    if (isEditTodoEmpty === false && todo.id === editTodo.id) {
      const listTodoCopy = [...listTodo];
      const currIndex = listTodoCopy.findIndex(obj => obj.id === todo.id);
      listTodoCopy[currIndex].title = editTodo.title;
      setListTodo(listTodoCopy);
      setEditTodo({});
      toast.success("Successfully updated!");
      return;
    }
  }
  
  const isEditTodoEmpty = Object.keys(editTodo).length === 0;

  const handleOnChangeEdit = (e) => {
    const temp = { ...editTodo };
    temp.title = e.target.value;
    setEditTodo(temp);
  }

  return (
    <div className='list-todo-container'>
      <AddTodo addNewTask={addNewTask} />
      <div className='list-todo-content'>
        {listTodo.length > 0 ?
          listTodo.map((todo, index) => {
            return <div key={todo.id}>

              {isEditTodoEmpty === false && todo.id === editTodo.id ?
                <input
                  type="text"
                  value={editTodo.title}
                  onChange={handleOnChangeEdit}
                />
                :
                <span>{index + 1} - {todo.title}</span>
              }

              <button onClick={() => handleClickEditSave(todo)}>
                {isEditTodoEmpty === false && todo.id === editTodo.id ? "Save" : "Edit"}
              </button>

              <button onClick={() => handleClickDelete(todo.id)}>
                Delete
              </button>
            </div>
          }
          )
          :
          <span>Don't multitask!</span>
        }
      </div>
    </div>
  )
}

export default ListTodo