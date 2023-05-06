import React from 'react'
import FeatureList from '../feature/FeatureList'
// import Slide from '../slide/Slide'
import Footer from '../footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import NavBarNotSignIn from '../navbar/NavBarNotSignIn'

const Home = () => {
  return (
    <div>
      <NavBarNotSignIn />
      <FeatureList />
      {/* <Slide /> */}
      <Footer />
    </div>
  )
}

export default Home