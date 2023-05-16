import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Home