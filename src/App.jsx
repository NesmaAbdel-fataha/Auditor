
// App.js أو الملف الرئيسي
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { useState ,useEffect } from 'react';

function App() {
  // هنا نخزن ايميل اليوزر لتحديث Navbar فورًا
const [userEmail, setUserEmail] = useState(null);
const [role, setRole] = useState(localStorage.getItem("role") || null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("role");

    console.log("EMAIL FROM STORAGE:", email);
    console.log("ROLE FROM STORAGE:", userRole);

    setUserEmail(email);
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");

    setUserEmail(null);  // تحديث state فورًا
    setRole(null);       // تحديث state فورًا
  };

  return (
    <Router>
      {/* تمرير userEmail و setUserEmail للNavbar */}
      <Navbar userEmail={userEmail} role={role} setRole={setRole} onLogout={handleLogout}/>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* تمرير setUserEmail لـ ContactUs لتحديثه بعد اللوجين */}
<Route 
  path="/contact" 
  element={
    <Contact 
      setUserEmail={setUserEmail} 
      setRole={setRole}
      role={role}
    />
  } 
/>
        <Route
  path="/admin"
  element={
    <ProtectedRoute roleRequired="admin" role={role}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>


      </Routes>
    </Router>
  );
}

export default App;
