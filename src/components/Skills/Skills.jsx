import React from 'react'
import './skills.css'
import HtmlLogo from "../../assets/html.png"
import JsLogo from "../../assets/javascript.png"
import ReactLogo from "../../assets/react.png"
import CssLogo from "../../assets/css.png"
import TailwindLogo from "../../assets/tailwind.png"
import GithubLogo from "../../assets/github.png"

const Skills = () => {
  const skills = [
    { name: "HTML", image: HtmlLogo },
    { name: "JavaScript", image: JsLogo },
    { name: "React", image: ReactLogo },
    { name: "CSS", image: CssLogo },
    { name: "Tailwind CSS", image: TailwindLogo },
    { name: "GitHub", image: GithubLogo },
  ];

  return (
    <section name="skills" className="skills-container">
      <div className="section-shell">
        <div className="skills-heading">
          <div>
            <p className="section-kicker">My toolkit</p>
            <h2 className="section-title">Technologies I work with.</h2>
          </div>
          <p className="section-copy">
            A focused toolkit for building modern interfaces, from semantic
            structure to maintainable React applications.
          </p>
        </div>

        <div className="image-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name} style={{ "--delay": `${index * 60}ms` }}>
              <div className="skill-icon">
                <img src={skill.image} alt="" />
              </div>
              <p>{skill.name}</p>
              <span>0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills