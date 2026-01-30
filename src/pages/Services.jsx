import React from 'react'

import ServicesSections from '../components/ServicesSections.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'
function Services() {
  return (
    <div className='box-services'>
     
      <div className='container '>
      <ServicesSections/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Services
