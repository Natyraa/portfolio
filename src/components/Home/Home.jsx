import React from 'react'
import "./home.css"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='home-container'>
      {/**Container */}
      <div className='container'>
        <p>Hi my name is</p>
        <h1>Natyra Arifi</h1>
        <h2>I am a JavaScript and React developer</h2>
        <span >Hi, my name is Natyra Arifi. I am a JavaScript and React developer passionate about building dynamic and interactive web applications. With a strong foundation in JavaScript and expertise in React, I specialize in developing scalable and performant web solutions that enhance user experiences. I enjoy tackling complex challenges and thrive in collaborative environments where I can contribute to innovative projects and continuously grow my technical skills</span>
        <div>
          <div className='btn-container'>
            <Link to="work" smooth={true} duration={500}>
          <button className='group'>View Work 
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight/></span>
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home