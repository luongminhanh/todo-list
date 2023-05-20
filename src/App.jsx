import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import SignIn from '../src/pages/SignIn';
import Profile from '../src/pages/Profile';
import Content from '../src/pages/Content';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<Content/>}></Route>
        <Route path='*' element={<div className='text-center text-5xl my-[100px]'>404 not found</div>}></Route>
      </Route>
      <Route path='/login' element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
