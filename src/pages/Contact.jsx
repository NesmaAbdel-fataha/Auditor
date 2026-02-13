import React from 'react'
import ContactUs from '../components/ContactUs.jsx'
import Footer from '../components/Footer.jsx'

function Contact({ setUserEmail, setRole, role }) {
  return (
    <>
      <ContactUs setUserEmail={setUserEmail} setRole={setRole} role={role} />
      <Footer />
    </>
  )
}

export default Contact
