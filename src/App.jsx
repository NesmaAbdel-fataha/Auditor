
// App.js أو الملف الرئيسي
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import { useState ,useEffect } from 'react';

function App() {
  // هنا نخزن ايميل اليوزر لتحديث Navbar فورًا
const [userEmail, setUserEmail] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("role");

    console.log("EMAIL FROM STORAGE:", email);
    console.log("ROLE FROM STORAGE:", userRole);

    setUserEmail(email);
    setRole(userRole);
  }, []);

  return (
    <Router>
      {/* تمرير userEmail و setUserEmail للNavbar */}
      <Navbar userEmail={userEmail} role={role} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* تمرير setUserEmail لـ ContactUs لتحديثه بعد اللوجين */}
        <Route path="/contact" element={<Contact setUserEmail={setUserEmail} />} />
      </Routes>
    </Router>
  );
}

export default App;
