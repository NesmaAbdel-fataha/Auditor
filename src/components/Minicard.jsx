import React from 'react'
import '../App.css'

const Minicard = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 minicards-container">
        
        <div className="col">
          <div className="card card-move h-100 shadow-lg border-0">
            <div className="card-icon">
              <i className="fas fa-book fa-2x icon-minCard"></i>
            </div>
            <div className="card-body">
              <h3 className="card-title">Bookkeeping</h3>
              <p className="card-text">Accurate and timely recording of all financial transactions.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-move h-100 shadow-lg border-0">
            <div className="card-icon">
              <i className="fas fa-chart-pie fa-2x icon-minCard"></i>
            </div>
            <div className="card-body">
              <h3 className="card-title">Tax Planning</h3>
              <p className="card-text">Strategic planning to minimize tax liability legally.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-move h-100 shadow-lg border-0">
            <div className="card-icon">
              <i className="fas fa-search-dollar fa-2x icon-minCard"></i>
            </div>
            <div className="card-body">
              <h3 className="card-title">Auditing</h3>
              <p className="card-text">Comprehensive financial audits for compliance.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-move h-100 shadow-lg border-0">
            <div className="card-icon">
              <i className="fas fa-handshake fa-2x icon-minCard"></i>
            </div>
            <div className="card-body">
              <h3 className="card-title">Consulting</h3>
              <p className="card-text">Expert financial advice for your business growth.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Minicard
