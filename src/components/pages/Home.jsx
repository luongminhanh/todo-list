import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'
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