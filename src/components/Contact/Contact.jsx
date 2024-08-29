import React, { useState } from 'react'

import "./contact.css"
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
    <div name="contact" className='contact-container'>
      <form method="POST" action="https://getform.io/f/alljqeda" className='contact-form'>
          <h1>Contact</h1>
          <p>Submit the form below or send me an email via natyraa1998@gmail.com</p>
        
    
       <div className='input-item' >
          <input type="text" placeholder='Name' name="name" value={formData.name} onChange={handleOnChange} ></input>
          <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleOnChange}></input>
          <textarea name="message" rows="10" placeholder='Message' value={formData.message} onChange={handleOnChange}></textarea>
          <button >Let's collaborate</button>
        </div>
       </form>
     
     
      
    </div>
  )
}

export default Contact