import { NavLink } from "react-router-dom";
import '../App.css'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand logo-wrapper" to="/">
        <img src={logo} className="logo" alt="logo"/>
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav m-auto">
            {/* Home Link - إزالة خاصية end */}
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            
            {/* Services Dropdown */}
          <li className="nav-item">
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>
            
            {/* About Link */}
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                About us
              </NavLink>
            </li>
            
            {/* Partners Link */}
            {/* <li className="nav-item">
              <NavLink 
                to="/partners" 
                className={({ isActive }) => 
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Partners
              </NavLink>
            </li> */}
            
            {/* Contact Link */}
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;