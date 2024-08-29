import React from 'react';
import './about.css'
const About = () => {
  return (
    <div name='about' className='about-container '>
        <div className='about-div'>
          <div className='sm:text-right pb-8 pl-4'>
            <p>
              About
            </p>
          </div>
          </div>
          <div className='text-paragraph'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Natyra Arifi, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>With a software expert readily available, I focus on developing impactful solutions that elevate user experiences, serving a diverse clientele from individual entrepreneurs to major corporations, all driven by a passion for excellence in software development.</p>  
            </div>
          </div>
    </div>
  );
};

export default About;