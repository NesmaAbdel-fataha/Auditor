import React from 'react'
import '../App.css'

// const Minicard = () => {
//   return (
//     <div className="container py-5">
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 minicards-container">
        
//         <div className="col">
//           <div className="card card-move h-100 shadow-lg border-0">
//             <div className="card-icon">
//               <i className="fas fa-book fa-2x icon-minCard"></i>
//             </div>
//             <div className="card-body">
//               <h3 className="card-title">Bookkeeping</h3>
//               <p className="card-text">Accurate and timely recording of all financial transactions.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card card-move h-100 shadow-lg border-0">
//             <div className="card-icon">
//               <i className="fas fa-chart-pie fa-2x icon-minCard"></i>
//             </div>
//             <div className="card-body">
//               <h3 className="card-title">Tax Planning</h3>
//               <p className="card-text">Strategic planning to minimize tax liability legally.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card card-move h-100 shadow-lg border-0">
//             <div className="card-icon">
//               <i className="fas fa-search-dollar fa-2x icon-minCard"></i>
//             </div>
//             <div className="card-body">
//               <h3 className="card-title">Auditing</h3>
//               <p className="card-text">Comprehensive financial audits for compliance.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card card-move h-100 shadow-lg border-0">
//             <div className="card-icon">
//               <i className="fas fa-handshake fa-2x icon-minCard"></i>
//             </div>
//             <div className="card-body">
//               <h3 className="card-title">Consulting</h3>
//               <p className="card-text">Expert financial advice for your business growth.</p>
//             </div>
//           </div>
//         </div>

// <a href="https://setup.manager.io/?CKisAQ" target="_blank">

// <div className="col">
//           <div className="card card-move h-100 shadow-lg border-0">
//             <div className="card-icon">
//               <i className="fas fa-handshake fa-2x icon-minCard"></i>
//             </div>
//             <div className="card-body">
//               <h3 className="card-title">System Selection and ERP Advisory </h3>
//               <p className="card-text">Helping your business choose the right ERP with expert guidance.</p>
//             </div>
//           </div>
//         </div>



// </a>


//       </div>
//     </div>
//   )
// }

// export default Minicard
const Minicard = () => {
  return (
    <div className="container  py-4">
      <div className="row g-3 minicards-container justify-content-center">

        {/* Card 1 */}
        <div className="col-12 col-md-4 col-lg-2 card-move">
          <div className="card h-100 shadow-sm border-0 text-center p-2">
            <i className="fas fa-book fa-lg mb-2 card-icon"></i>
            <h6 className="mb-1">Bookkeeping</h6>
            <p className="small mb-0">
              Accurate financial records.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 col-lg-2 card-move">
          <div className="card h-100 shadow-sm border-0 text-center p-2">
            <i className="fas fa-chart-pie fa-lg mb-2 card-icon"></i>
            <h6 className="mb-1">Tax Planning</h6>
            <p className="small mb-0">
              Smart tax strategies.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 col-lg-2 card-move">
          <div className="card h-100 shadow-sm border-0 text-center p-2">
            <i className="fas fa-search-dollar fa-lg mb-2 card-icon"></i>
            <h6 className="mb-1">Auditing</h6>
            <p className="small mb-0">
              Full compliance audits.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-4 col-lg-2 card-move">
          <div className="card h-100 shadow-sm border-0 text-center p-2">
            <i className="fas fa-handshake fa-lg mb-2 card-icon"></i>
            <h6 className="mb-1">Consulting</h6>
            <p className="small mb-0">
              Business growth advice.
            </p>
          </div>
        </div>

        {/* Linked Card */}
        <div className="col-12 col-md-4 col-lg-2 card-move">
          <a
            href="https://setup.manager.io/?CKisAQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 shadow-sm border-0 text-center p-2">
              <i className="fas fa-cogs fa-lg mb-2 card-icon"></i>
              <h6 className="mb-1">ERP Advisory</h6>
              <p className="small mb-0">
              
Helping your business choose the right ERP with expert guidance.

              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Minicard;
