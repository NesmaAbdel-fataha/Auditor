import React from 'react'

import HeroSection from '../components/HeroSection.jsx';
import WeAre from '../components/WeAre.jsx';
import Values from '../components/Values.jsx';
import Footer from '../components/Footer.jsx';
import OurVision from '../components/OurVision.jsx';
import OurMission from '../components/OurMission.jsx';
import OurGoals from '../components/OurGoals.jsx';

function AboutUS() {
  return (
    <>
    
       <HeroSection/>
       <WeAre/>
       <OurGoals/>
         <OurMission/>
       <OurVision/>
     
       <Values/>
<Footer/>

    </>
  );
}

export default AboutUS;