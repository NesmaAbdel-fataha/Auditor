import React from 'react'

import Bannar from '../components/Bannar.jsx'
import Minicard from '../components/Minicard.jsx'
import Slider from '../components/PartnersSlider.jsx'
import About from '../components/About.jsx'
import StatsSection from '../components/StatsSection.jsx'
import Footer from '../components/Footer.jsx'

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
