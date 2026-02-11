import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect } from "react";
const Navbar = ({ userEmail ,role}) => {
  const username = userEmail ? userEmail.split("@")[0] : null;
useEffect(() => {
    console.log("User Email:", userEmail);
    console.log("Username:", username);
    console.log("Role:", role); // user أو admin
  }, [userEmail, role]);
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
            {username && <li className="nav-item fw-bold text-primary">👋 {username}</li>}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
