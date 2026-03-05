import React from 'react'
import mangerlogo from "../assets/manger2-.png"
import manger from "../assets/manger.png"
import odoologo from "../assets/odoo.png"
import odoo2 from "../assets/t_odoo1932.jpg"

import nextlogo from "../assets/nextE.png"
import Footer from '../components/Footer.jsx';

function ServicesPrograms() {
  return (
    <div>
    <section className="py-5 bg-white mt-5 text-center">
  <div className="container">
    
    <h2 className="fw-bold text-danger  position-relative d-inline-block">
      Our Service Programs
    </h2>

    <div className="mx-auto mt-3" style={{width: "140px", height: "3px", backgroundColor: "#dc3545"}}></div>
  <div className="position-relative mb-5">
          
          {/* Circle Image */}
          <div className="text-center">
            <img
              src={mangerlogo}
              alt="Manager"
              className="rounded-circle border border-danger  mt-3 border-4 shadow"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                // marginBottom: "-10px",
                // zIndex: 1
              }}
            />
          </div>

          <div className="card pt-5 shadow-sm border-0">
            <div className="row g-0 align-items-center">

              <div className="col-md-6 p-5">
                <h3 className="text-danger fw-bold mb-3">Manager Program</h3>
                <p>
                  Develop your leadership skills and business expertise with our comprehensive Manager Program.
                </p>
                <button className="btn btn-danger px-4 mt-3" onClick={() => window.open("https://www.manager.io/cloud-edition/free-trial/1478b488-70b1-706b-4574-ef9a8718338b", "_blank")}>
                 Join us
                </button>
              </div>

              <div className="col-md-6 text-center p-4">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "300px" }}
                >
                 <img
                  src={manger}
                  alt="Manager Program"
                  className="img-fluid"
                />
                </div>
              </div>

            </div>
          </div>
        </div>
{/* bbbbbbbbbbbb */}
<div className="position-relative">

          <div className="text-center">
            <img
              src={nextlogo}
              alt="Next"
              className="rounded-circle border border-praimary border-4 shadow"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                // marginBottom: "-60px",
                // zIndex: 1
              }}
            />
          </div>

          <div className="card pt-5 shadow-sm border-0">
            <div className="row g-0 align-items-center">

              <div className="col-md-6 p-5">
                <h3 className="text-danger fw-bold mb-3">Next Program</h3>
                <p>
                  Stay ahead with innovative digital transformation and strategic solutions.
                </p>
                <button className="btn btn-danger px-4 mt-3" onClick={()=>window.open("./Contact")}>
                 Join us
                </button>
              </div>

             <div className="col-md-6 d-flex align-items-center justify-content-center p-4" style={{ minHeight: "300px" }}>
  <svg
    fill="none"
    viewBox="-15 0 80 50"
    xmlns="http://www.w3.org/2000/svg"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    <path d="M0 9.6C0 4.29807 4.29807 0 9.6 0H38.4C43.7019 0 48 4.29807 48 9.6V38.4C48 43.7019 43.7019 48 38.4 48H9.6C4.29807 48 0 43.7019 0 38.4V9.6Z" fill="#0089FF"></path>
    <path clipRule="evenodd" d="M32.3457 15.8147H31.5405H21.0734H15.8399V11.5205H32.3457V15.8147ZM21.0734 25.8787V31.7832H32.4798V36.0774H15.8398V21.5845H21.0734H31.5405V25.8787H21.0734Z" fill="white" fillRule="evenodd"></path>
  </svg>
</div>

            </div>
          </div>
        </div>
        {/* ================= Card 2 ================= */}
      


        {/* ================= Card 3 ================= */}
        
  <div className="position-relative mb-5">

          <div className="text-center">
            <img
              src={odoologo}
              alt="Odoo"
              className="rounded-circle border border-danger border-4 shadow"
              style={{
                  width: "70px",
                height: "70px",
                objectFit: "cover",
                // marginBottom: "-60px",
                // zIndex: 1
              }}
            />
          </div>

          <div className="card pt-5 shadow-sm border-0">
            <div className="row g-0 align-items-center flex-md-row-reverse">

              <div className="col-md-6 p-5">
                <h3 className="text-danger fw-bold mb-3">Odoo Program</h3>
                <p>
                  Optimize your business operations using our Odoo ERP solutions.
                </p>
                <button className="btn btn-danger px-4 mt-3" onClick={()=>window.open("./Contact")}>
                  Join us
                </button>
              </div>

              <div className="col-md-6 text-center p-4">
                <div
                  className=" d-flex align-items-center justify-content-center"
                  style={{ height: "300px" }}
                >
                 <img
                  src={odoo2}
                  alt="Odoo Program"
                  className="img-fluid"
                />
                </div>
              </div>

            </div>
          </div>
        </div>
  </div>
  
</section>
<Footer />
</div>
  )
}

export default ServicesPrograms
