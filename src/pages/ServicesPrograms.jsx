import React from 'react'
import mangerlogo from "../assets/manger2-.png"
import manger from "../assets/manger.png"
import odoologo from "../assets/odoo.png"
import odoo2 from "../assets/t_odoo1932.jpg"
import next from "../assets/next-program.png"
import nextlogo from "../assets/next.png"
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
                <button className="btn btn-danger px-4 mt-3">
                  Learn More
                </button>
              </div>

              <div className="col-md-6 text-center p-4">
                <div
                  className="bg-light d-flex align-items-center justify-content-center"
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


        {/* ================= Card 2 ================= */}
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
                <button className="btn btn-danger px-4 mt-3">
                  Learn More
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


        {/* ================= Card 3 ================= */}
        <div className="position-relative">

          <div className="text-center">
            <img
              src={nextlogo}
              alt="Next"
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
            <div className="row g-0 align-items-center">

              <div className="col-md-6 p-5">
                <h3 className="text-danger fw-bold mb-3">Next Program</h3>
                <p>
                  Stay ahead with innovative digital transformation and strategic solutions.
                </p>
                <button className="btn btn-danger px-4 mt-3">
                  Learn More
                </button>
              </div>

              <div className="col-md-6 text-center p-4">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "300px" }}
                >
                  <img
                  src={next}
                  alt="Next Program"
                  className="img-fluid"
                />                </div>
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
