
  import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const ContactUs = ({ setUserEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
  try {
    const senderEmail = localStorage.getItem("userEmail");

    const res = await axios.post(
      "http://localhost:5000/api/contact",
      {
        senderEmail,
        message,
      }
    );

    alert(res.data.message);
    setMessage("");

  } catch (error) {
    console.log(error);
    alert("Error sending message");
  }
};


  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      setMsg(res.data.message);
      localStorage.setItem("userEmail", res.data.email);
      localStorage.setItem("role", res.data.role);

      // ✅ تحديث النافبار فورًا
      setUserEmail(res.data.email);

    } catch (error) {
      console.log(error);
      setMsg("Server not responding");
    }
  };

  return (
    <div className="container contactUs my-5">
      <h2 className="card-title text-start mt-5 mb-4">
        Get in touch with our accounting experts
      </h2>

      <hr className="my-5" />

      <div className="card mb-3 border-0">
        <div className="row g-0">

          {/* Form */}
          <div className="col-md-8 form-contact">
            <div className="card-body text-start">
              <h5 className="card-title mb-4">Send us a message</h5>

              {/* Email input */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              {/* password */}
                  <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <div className="mb-4">
                <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
                  Login
                </button>
                {msg && <p className="mt-3">{msg}</p>}
              </div>
              {/* Message */}
              <div className="mb-4">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here..."
                  value={message}
  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Static Contact Info */}
              <div className="mb-4">
                <p className="mb-2">
                  <strong>Address:</strong><br />
                  Units D12 & D13, Maadi Gate Building, off Autostrad Road,
                  Maadi District, Maadi, Cairo, Egypt
                </p>

                <p className="mb-2">
                  <strong>Phone:</strong><br />
                  +201552266000
                </p>

                <p className="mb-0">
                  <strong>Email:</strong><br />
                  info@auditor.eg
                </p>
              </div>

              <button className="btn btn-danger" onClick={handleSendMessage}>
                Send Message
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13836.669022560449!2d31.27648754402865!3d29.888280933159262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837000d1ea381%3A0x3ad1713779b76624!2sauditor%20egypt!5e0!3m2!1sen!2seg!4v1768150698105!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
