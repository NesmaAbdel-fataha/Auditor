import React from 'react'
import '../App.css'

import accuracyImg from "../assets/accurcy.png"
import integrityImg from "../assets/integrty2.png"
import commitmentImg from "../assets/handes.png"
import innovationImg from "../assets/pngtree-innovation-4.png"

const Values = () => {
  return (
    <div className="container my-5">

      <h2 className="text-center mb-5">
        Our Core Values
      </h2>

      <div className="row row-cols-1 row-cols-md-4 g-4">

        {/* Accuracy */}
        <div className="col">
          <div className=" h-100 text-center value-card">
            <img src={accuracyImg} className="img-values mx-auto mt-4" alt="Accuracy" />
            <div className="card-body">
              <h5 className="card-title">Accuracy</h5>
              <p className="card-text">
                We ensure precise financial analysis and reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Integrity */}
        <div className="col">
          <div className=" h-100 text-center value-card">
            <img src={integrityImg} className="img-values mx-auto mt-4" alt="Integrity" />
            <div className="card-body">
              <h5 className="card-title">Integrity</h5>
              <p className="card-text">
                We operate with honesty, transparency, and strong ethical standards.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="col">
          <div className=" h-100 text-center value-card">
            <img src={commitmentImg} className="img-values mx-auto mt-4" alt="Commitment" />
            <div className="card-body">
              <h5 className="card-title">Commitment</h5>
              <p className="card-text">
                We are dedicated to supporting our clients’ long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Innovation */}
        <div className="col">
          <div className=" h-100 text-center value-card">
            <img src={innovationImg} className="img-values mx-auto mt-4" alt="Innovation" />
            <div className="card-body">
              <h5 className="card-title">Innovation</h5>
              <p className="card-text">
                We apply modern tools and innovative thinking to financial solutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Values

