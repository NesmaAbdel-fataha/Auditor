import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UserForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    operationAddress: "Apt no. 103, El-Mostashar Tower, Porto El-Fouad, Hadayek Helwan, Korniesh Elnil, Helwan, Cairo, Egypt.",
  };


  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, email, phone, position, message, operationAddress } = form;
    if (
      !name ||
      !email ||
      !phone ||
      !position ||
      !message ||
      !operationAddress
    ) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    // simple email regex
    const emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRe.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!/^\d+$/.test(phone)) {
      toast.error("Phone number must contain digits only.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Log data before sending
      console.log("Sending form data to backend:", form);
      
      const res = await axios.post("http://localhost:5000/api/users", form, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      console.log("Response from backend:", res.data);
      toast.success("Form submitted successfully");
      setForm(initialState);
    } catch (err) {
      console.error("Error response:", err.response?.data);
      console.error("Full error:", err);
      toast.error(
        err.response?.data?.message || "Failed to submit form, please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="user-form-page">
      <div className="container userform-container my-5 py-5">
        <h2 className="page-title text-center mb-5">Get in Touch</h2>

        <div className="row g-4">
          {/* left column: form */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="user-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="6"
                  cols="50"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div className="mb-3">
                <label htmlFor="operationAddress" className="form-label">
                  Operation Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="operationAddress"
                  name="operationAddress"
                  value={form.operationAddress}
                  onChange={handleChange}
                  required
                />
              </div> */}

              <div className="mb-4">
                <p className="mb-2">
                  <strong>Head office:</strong><br />
                  Units D12 & D13, Maadi Gate Building, off Autostrad Road,
                  Maadi District, Maadi, Cairo, Egypt
                </p>
              </div>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>Operation address:</strong><br />
                  Apt no. 103, El-Mostashar Tower, Porto El-Fouad, Hadayek Helwan,
                  Korniesh Elnil, Helwan, Cairo, Egypt
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-danger btn-submit w-100"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* right column: map */}
          <div className="col-lg-6">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d119116.19353808557!2d31.20024227320723!3d29.949686760462498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x1458478d6b4b2733%3A0x8c9acf4541f79153!2sUnits%20D12%20%26%20D13%2C%20Maadi%20Gate%20Building%2C%20Maadi%20District%2C%20Maadi%2C%20Cairo%2C%20Egypt!3m2!1d29.9615544!2d31.2733057!4m5!1s0x145879e82afdfcd9%3A0x48a33986c79d2b03!2sApt%20no.%20103%2C%20El-Mostashar%20Tower%2C%20Porto%20El-Fouad%2C%20Hadayek%20Helwan%2C%20Korniesh%20Elnil%2C%20Helwan%2C%20Cairo%2C%20Egypt!3m2!1d29.889478!2d31.2761673!5e0!3m2!1sen!2seg!4v1709457631234"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default UserForm;