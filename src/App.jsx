import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import Profile from './components/pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

  )
}

export default App
