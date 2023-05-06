import React from 'react'
import FeatureList from '../feature/FeatureList'
// import Slide from '../slide/Slide'
import Footer from '../footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../navbar/NavBar'

const HomeSignIn = () => {
  return (
    <div>
      <NavBar />
      <FeatureList />
      {/* <Slide /> */}
      <Footer />
    </div>
  )
}

export default HomeSignIn