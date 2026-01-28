
// App.js أو الملف الرئيسي
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
//import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* النافبار خارج Routes */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}
export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/AboutUs';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <div className="app-wrapper"> {/* wrapper flex عمودي */}
//       <Router>
//         {/* النافبار خارج Routes */}
//         <Navbar />

//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         {/* الفوتر */}
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
