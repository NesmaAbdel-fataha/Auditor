

import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setUserEmail, setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // store token and user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userEmail", res.data.email);

      // update parent state
      if (setUserEmail) setUserEmail(res.data.email);
      if (setRole) setRole(res.data.role);

      if (res.data.role === "admin") {
        toast.success("Welcome admin");
        navigate("/admin-dashboard");
      } else {
        toast.error("Unauthorized: not an admin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
