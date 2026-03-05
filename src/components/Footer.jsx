import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" text-white text-center">

  <div className="card-body text-center footer">
<div className="social-icons flex justify-space-between  mx-auto my-4">
  <a href="#" className="icon-style">
    <FaFacebookF />
  </a>
  <a href="#" className="icon-style">
    <FaInstagram />
  </a>
  <a href="#" className="icon-style">
    <FaTwitter />
  </a>
  <a href="#" className="icon-style">
    <FaGooglePlusG />
  </a>
  <a href="#" className="icon-style">
    <FaYoutube />
  </a>
</div>
  {/* admin link hidden/ discreet */}
  <div className="admin-access">
    <Link to="/admin-login" style={{fontSize:"0.75rem",color:"#ccc"}}>Admin Access</Link>
  </div>
  </div>
  <div className="card-footer text-center text-white sub-footer">
   Copyright &copy; 2026 
  </div>
</div>
    </div>
  )
}

export default Footer
