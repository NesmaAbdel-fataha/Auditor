import React from 'react'

import ServicesSections from '../components/ServicesSections'
import Footer from '../components/Footer'
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
