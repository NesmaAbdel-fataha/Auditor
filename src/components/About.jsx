import React from 'react'
import '../App.css'
import lightBulb from '../assets/lamp.jpeg'
import aboutImg from '../assets/man-593333_1280.jpg'
const About = () => {
  return (
//     <div className='container'>
//       <div className="mb-3" >
//   <div className="row g-0  about-section">
//  <div className="col-md-8 ">
//       <div className="card-body  text-start about-us">
//         <h2 className="card-title size-title">About Our Company</h2>
//          <h3 className="card-title text-danger">WHAT WE PROVIDE...</h3>
// <p className="card-text size-text">Auditor Group provides Taxation, Audit, Accounting as well as Investment & Company Incorporation advisory services.</p>
      
//        <div className="d-flex sub-text mt-5 space-around">
//         <div className="box-img ">
//             <img src={lightBulb} className="img-fluid rounded-start" alt="..."/>
//         </div>
//         <div className="text-img">
// <p className='card-text'>A one-stop for all your financial services.
// We place your financial success at the forefront of everything we do.</p>
//         </div>
//        </div>
//       </div>
//     </div>

//     <div className="col-md-4  about-img-box">
//       <img src={aboutImg} className="img-fluid rounded-start" alt="img"/>
//     </div>
   
//   </div>
// </div>

//     </div>

 <div className="container">
  <div className="mb-3">
    <div className="row g-0 about-section align-items-stretch">

      <div className="col-md-8">
        <div className="card-body text-start about-us p-4 h-100">
          <h2 className="card-title size-title">About Our Company</h2>
          <h3 className="card-title text-About">WHAT WE PROVIDE ..</h3>
          <p className="card-text size-text">
            Auditor Group provides Taxation, Audit, Accounting as well as Investment & Company Incorporation advisory services.
          </p>

          <div className="d-flex sub-text mt-5 align-items-center">
            <div className="box-img me-3">
              <img src={lightBulb} className="img-fluid" alt="light bulb icon" />
            </div>
            <div className="text-img">
              <p className="card-text mb-0">
                A one-stop for all your financial services.<br />
                We place your financial success at the forefront of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 p-0">
        <img src={aboutImg} className="img-fluid w-100 h-100" alt="about us" style={{ objectFit: 'cover' }} />
      </div>

    </div>
  </div>
</div>


  )
}

export default About
