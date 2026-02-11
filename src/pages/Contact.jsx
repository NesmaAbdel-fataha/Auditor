import React from 'react'
import ContactUs from '../components/ContactUs.jsx'
import Footer from '../components/Footer.jsx'

function Contact({ setUserEmail, userEmail }) {
  return (
    <>
      <ContactUs setUserEmail={setUserEmail} userEmail={userEmail} />
      <Footer />
    </>
  )
}

export default Contact
