import React, { useState } from 'react'
import "./work.css"
import { data } from '../../data/data.js'
const Work = () => {
 const [project , setProjects]= useState(data)
  return (
    <div name="work" className='work-container'>
      <div className='max-w-[1000px]'>
      <div className='text-par'>
        <h1>Work</h1>
        <p>Check out some of my recent work:</p>
      </div>
      <div className='card-container'>
         {project.map(({id , name ,image ,description, github}) => {
          return (<div key={id} className='cart-item' style={{background : `url(${image})` , opacity: "0.7"}}>
            <p className='paragraph'>{name}</p>
            <p className='description'>{description}</p>
            <a href={github} target='_blank' rel="noopener noreferrer">
              <button className='button'>GitHub Link</button>
            </a>
          </div>)
         })}
      </div>
      </div>
    </div>
  )
}

export default Work