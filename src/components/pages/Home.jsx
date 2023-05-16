import React from 'react'
import FeatureList from '../feature/FeatureList'
import Slide from '../slide/Slide'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <FeatureList />
      <Slide />
      <Footer />
    </div>
  )
}

export default Home