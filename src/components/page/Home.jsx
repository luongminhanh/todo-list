import React from 'react'
import FeatureList from '../feature/FeatureList'
// import Slide from '../slide/Slide'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Outlet />
      <FeatureList />
      {/* <Slide /> */}
      <Footer />
    </div>
  )
}

export default Home