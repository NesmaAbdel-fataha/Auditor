import { NavLink } from "react-router-dom";
import logo from "../assets/new1_logo.png";
import { useEffect } from "react";
const Navbar = ({ userEmail ,role,onLogout }) => {
  const username = userEmail ? userEmail.split("@")[0] : null;
useEffect(() => {
    console.log("User Email:", userEmail);
    console.log("Username:", username);
    console.log("Role:", role); // user أو admin
  }, [userEmail, role]);

//   const handleLogout = () => {
//   // مسح البيانات من localStorage
//   localStorage.removeItem("token");
//   localStorage.removeItem("role");
//   localStorage.removeItem("userEmail");

//   // لو عندك state في App.jsx
//   setUserEmail(null);
//   setRole(null);

//   // إعادة التوجيه للهوم
//   window.location.href = "/";
// };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand logo-wrapper" to="/">
          <img src={logo} className="logo" alt="logo"/>
        </NavLink>
        
        
        {/* زر القائمة للموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav m-auto">
            {username && (
              <li className="nav-item me-2">
                <span className="username-badge">👋 {username}</span>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Contact</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/user-form" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>User Form</NavLink>
            </li> */}
            {role === "admin" && (
  <li className="nav-item">
            <NavLink to="/admin-dashboard" className="nav-link">
      Dashboard
    </NavLink>
  </li>
)}
{role === "admin" || role === "user" ? (
  <li className="nav-item">
    <button className="btn btn-danger ms-3" onClick={onLogout }>
      Logout
    </button>
  </li>
) : null}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
