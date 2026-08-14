import React, { useState } from 'react'
import "./contact.css"
import { HiOutlineEnvelope, HiArrowUpRight } from "react-icons/hi2"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  const [formData , setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleOnChange = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})
  }
 
  return (
    <section name="contact" className="contact-container">
      <div className="section-shell contact-grid">
        <div className="contact-intro">
          <p className="section-kicker">Get in touch</p>
          <h2 className="section-title">Have an idea? Let’s build it together.</h2>
          <p className="section-copy">
            I’m open to frontend opportunities, collaborations, and interesting
            projects. Send me a message and I’ll get back to you.
          </p>

          <a className="email-link" href="mailto:natyra.arifi@hotmail.com">
            <HiOutlineEnvelope />
            <span><small>Email me</small>natyra.arifi@hotmail.com</span>
            <HiArrowUpRight />
          </a>

          <div className="contact-socials">
            <a href="https://github.com/Natyraa" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/natyra-arifi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>

        <form method="POST" action="https://getform.io/f/alljqeda" className="contact-form">
          <div className="field-row">
            <label>
              Your name
              <input required type="text" placeholder="John Doe" name="name" value={formData.name} onChange={handleOnChange} />
            </label>
            <label>
              Your email
              <input required type="email" placeholder="john@example.com" name="email" value={formData.email} onChange={handleOnChange} />
            </label>
          </div>
          <label>
            Your message
            <textarea required name="message" rows="7" placeholder="Tell me a little about your project..." value={formData.message} onChange={handleOnChange} />
          </label>
          <button type="submit">Send message <HiArrowUpRight /></button>
        </form>
      </div>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Natyra Arifi</span>
        <span>Designed & built with care.</span>
      </footer>
    </section>
  )
}

export default Contact