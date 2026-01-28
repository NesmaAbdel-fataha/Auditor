import React from 'react'
import Img from '../assets/wide_road.jpg'
import '../App.css'

const HeroSection = () => {
  return (
    <div className="heroWrapper">

      <img src={Img} alt="hero" className="heroImage" />

      <div className="heroContent">
        <h1>
          More than Accountants.<br />
          Your Trusted Financial Partners.
        </h1>

        <p>
          We help you see the full picture of your financial future
          with clarity and confidence.
        </p>
      </div>

    </div>
  )
}

export default HeroSection

