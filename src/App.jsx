import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navbar/NavBar'
import NavBarNotSignIn from './components/navbar/NavBarNotSignIn'
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import SignIn from './components/page/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Home/>
      }>
        <Route path='/signin' element={<NavBar/>}/>
        <Route path='/notsignin' element={<NavBarNotSignIn />}/>
      </Route>
      
      <Route path='/login' element={<SignIn />}></Route>
    </Routes>
  )
}

export default App
