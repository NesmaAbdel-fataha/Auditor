import React from 'react'
import Navbar from '../components/Navbar'
import Bannar from '../components/Bannar'
import Minicard from '../components/Minicard'
import Slider from '../components/PartnersSlider'
import About from '../components/About'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Bannar/>
      <Minicard/>
      <Slider/>
      <About/>
      <StatsSection/>
      <Footer/>
    </div>
  )
}

export default Home
