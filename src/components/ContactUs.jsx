import React from 'react'
import '../App.css'

const ContactUs = () => {
  return (
    <div className="container contactUs my-5">
      <h2 className="card-title text-start mt-5 mb-4">
        Get in touch with our accounting experts
      </h2>
<hr className='my-5' />
      <div className="card mb-3 border-0">
        <div className="row g-0">

          {/* Form */}
        <div className="col-md-8 form-contact">
  <div className="card-body text-start">
    <h5 className="card-title mb-3">Send us a message</h5>

    {/* Email */}
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter your email"
      />
    </div>

    {/* Phone */}
    <div className="mb-3">
      <label className="form-label">Phone Number</label>
      <input
        type="tel"
        className="form-control"
        placeholder="Enter your phone number"
      />
    </div>

    {/* Address */}
    <div className="mb-3">
      <label className="form-label">Address</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your address"
      />
    </div>

    {/* Message */}
    <div className="mb-3">
      <label className="form-label">Your Message</label>
      <textarea
        className="form-control"
        rows="4"
        placeholder="Write your message here..."
      ></textarea>
    </div>

    <button className="btn btn-danger">
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

