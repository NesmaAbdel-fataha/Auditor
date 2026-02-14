import React from 'react'
import img from '../assets/accServ1.png'
import img2 from '../assets/aduting.png'
import img3 from '../assets/tax.png'
import img4 from '../assets/investement2.png'
import img5 from '../assets/ssrt.png'
import img6 from '../assets/manger.png'
import '../App.css'
import { Link } from 'react-router-dom'

const ServicesSections = () => {
  return (
    <div className='services-container my-5 py-4'>

      {/* Title Section */}
      <div className=" text-center border-0">
        <div className="card-body">
          <h2 className="card-title font-txt">Our Services</h2>
          <p className="card-text">
            We provide a range of professional services to meet your business needs.
          </p>
        </div>
      </div>

      {/* Service Card */}
      <div className="card service-card p-3 mx-auto">
        <div className="row g-0 align-items-center">

          {/* Image */}
          <div className="col-12 col-md-4 text-center service-img-wrapper">
            <img src={img} className="img-fluid rounded-start service-img" alt="Accounting Service" />
          </div>

          {/* Text */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h3 className="card-title acc-txt">Accounting Services</h3>
              <hr/>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Accounting System Setup</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Bookkeeping & Transactions</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Financial Statements Preparation</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Payroll & Social Insurance</p>
            </div>
          </div>

        </div>
      </div>
{/* ssssssssssssssssssssssss */}
<Link to="/ServicesPrograms"  className="text-decoration-none text-dark">
  <div className="card service-card p-3 mx-auto h-100">
    <div className="row g-0 align-items-center">

      {/* Image */}
      <div className="col-12 col-md-4 text-center service-img-wrapper">
        <img
          src={img6}
          className="img-fluid rounded-start service-img"
          alt="Software Solutions"
        />
      </div>

      {/* Text */}
      <div className="col-12 col-md-8">
        <div className="card-body">
          <h3 className="card-title acc-txt">System Selection and ERP Advisory </h3>
          <hr />

          <p className="card-text">
            <i className="fas fa-check check-icon"></i>
           Assessing your current workflows
          </p>

          <p className="card-text">
            <i className="fas fa-check check-icon"></i>
           Recommending the best-fit ERP system
          </p>

          <p className="card-text">
            <i className="fas fa-check check-icon"></i>
            Ensuring smooth selection & planning
          </p>

          <p className="card-text">
            <i className="fas fa-check check-icon"></i>
           Vendor-neutral, expert-driven advice
          </p>
        </div>
      </div>

    </div>
  </div>
</Link>


{/* bbbbbbbbbbbb */}
 <div className="card service-card p-3 mx-auto">
        <div className="row g-0 align-items-center">

          {/* Image */}
          <div className="col-12 col-md-4 text-center service-img-wrapper">
            <img src={img2} className="img-fluid rounded-start service-img" alt="Auditing Services" />
          </div>

          {/* Text */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h3 className="card-title acc-txt">Auditing Services</h3>
              <hr/>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Financial Audit</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Records Examination</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Internal Controls Review</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Audit Reports</p>
            </div>
          </div>

        </div>
      </div>
      {/* bbbbbbbbbbbbbbbb */}
       <div className="card service-card p-3 mx-auto">
        <div className="row g-0 align-items-center">

          {/* Image */}
          <div className="col-12 col-md-4 text-center service-img-wrapper">
            <img src={img3} className="img-fluid rounded-start service-img" alt="Tax Services" />
          </div>

          {/* Text */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h3 className="card-title acc-txt">Tax Services</h3>
              <hr/>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Tax Return Preparation</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Income Tax & VAT</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Tax Reviews</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Tax Consulting</p>
            </div>
          </div>

        </div>
      </div>
        {/* bbbbbbbbbbbbbbbb */}
       <div className="card service-card p-3 mx-auto">
        <div className="row g-0 align-items-center">

          {/* Image */}
          <div className="col-12 col-md-4 text-center service-img-wrapper">
            <img src={img4} className="img-fluid rounded-start service-img" alt="Company Formation & Investment" />
          </div>

          {/* Text */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h3 className="card-title acc-txt">Company Formation & Investment</h3>
              <hr/>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Company Formation</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Business Licensing</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Legal Documentation</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Investment Advisory</p>
            </div>
          </div>

        </div>
      </div>

       <div className="card service-card p-3 mx-auto">
        <div className="row g-0 align-items-center">

          {/* Image */}
          <div className="col-12 col-md-4 text-center service-img-wrapper">
            <img src={img5} className="img-fluid rounded-start service-img" alt="Feasibility & Consulting" />
          </div>

          {/* Text */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h3 className="card-title acc-txt">Feasibility & Consulting</h3>
              <hr/>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Feasibility Studies</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Financial Analysis</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Business Consulting</p>
              <p className="card-text"><i className="fas fa-check check-icon"></i> Project Financing</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServicesSections

 