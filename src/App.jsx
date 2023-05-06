import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import SignIn from './components/page/SignIn';
import HomeSignIn from './components/page/HomeSignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<HomeSignIn />} />
      <Route path='/login' element={<SignIn />} />
    </Routes>
  )
}

export default App
