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
              We are a professional auditing and financial consulting firm dedicated to supporting
              businesses in achieving financial transparency, regulatory compliance, and long-term
              sustainable growth. We work closely with our clients to understand their unique
              challenges and objectives, allowing us to deliver tailored financial solutions that
              add real value to their operations.
              <br /><br />
              Our team brings together deep industry knowledge, technical expertise, and a strong
              commitment to accuracy and integrity. By combining proven auditing standards with
              modern financial practices and analytical tools, we help organizations gain clearer
              insights into their financial performance, manage risks effectively, and make
              confident, informed decisions that support stability and future expansion.
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

