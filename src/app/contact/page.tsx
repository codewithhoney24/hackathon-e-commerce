 

import React from 'react'
import Header from '../components/shop/Header'
import ContactUs from '../components/Contact/ContactUs'
import Office from '../components/Contact/Office'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
        <Header/>
        <ContactUs/>
        <Office/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default ContactPage