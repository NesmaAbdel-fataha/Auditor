import React from 'react'
import '../App.css'
import imgGrowth from "../assets/financial-growth-concept.png"

const OurMission = () => {
  return (
    <div className="container my-5 section-ourMission">

      <div className="row align-items-center">

        {/* Text */}
        <div className="col-12 col-md-8 order-1">
          <div className="our-mission container">
            <h5 className="card-title mb-3">
              Who We Are
            </h5>

            <p>
              We are auditor Office owned by Certified Accountant Mr. Ali Shawqy Ali for Accounting,
              <br></br> Auditing and Tax services. We are professional entity that serves and develops small and medium companies. We provide services for startups to keep it and develop its business. We help owners and decision makers to work inside the Egyptian market according to all applicable commercial or tax laws and regulations and/or all applicable laws and regulations that organize investment procedures in Egypt. We in tension with all financial and accounting tasks in companies. We aim to make our clients relax and confident, not to be overwhelm or confused by Tax and accounting tasks or completing governmental procedures instead, clients should better concentrate on managing and developing business.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="col-12 col-md-4 order-2 text-center">
          <img
            src={imgGrowth}
            className="img-fluid mission-img"
            alt="Financial growth illustration"
          />
        </div>

      </div>

    </div>
  )
}

export default OurMission

