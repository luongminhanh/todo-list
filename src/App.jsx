import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListTodo from './components/Todos/ListTodo';
import './styles.css'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import videoBg from '../src/assets/videoBg.mp4';

const App = () => {
  
  return (
    <>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='app-content'>
        <header className='app-header'>
          <img src={reactLogo} className='logo' />
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <p>Todo App with ReactJS</p>
        <ListTodo />
      </div>
    </>
  )
}

export default App
