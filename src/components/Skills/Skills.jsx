import React from 'react'
import './skills.css'
import HtmlLogo from "../../assets/html.png"
import JsLogo from "../../assets/javascript.png"
import ReactLogo from "../../assets/react.png"
import CssLogo from "../../assets/css.png"
import TailwindLogo from "../../assets/tailwind.png"
import GithubLogo from "../../assets/github.png"
const Skills = () => {
  return (
    <div name="skills" className='skills-container'>
       {/**Container */}
      <div className='m-width-[1000px]'>
        <div className='experience-container'>
         <h1>Skills</h1>
         <p>These are the technologies that I've worked with:</p>
        </div>
        <div className='image-container'>
         <div>
         <img src={HtmlLogo} alt="html logo"></img>
         <p>HTML</p>
         </div>
         <div>
         <img src={JsLogo} alt="javascript logo"></img>
         <p>JavaScript</p>
         </div>
         <div>
         <img src={ReactLogo} alt="react logo"></img>
         <p>React Js</p>
         </div>
         <div>
         <img src={CssLogo} alt="css logo"></img>
         <p>Css</p>
         </div>
         <div>
         <img src={TailwindLogo} alt="tailwind logo"></img>
         <p>Tailwind</p>
         </div>
         <div>
         <img src={GithubLogo} alt="github logo"></img>
         <p>Github</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Skills