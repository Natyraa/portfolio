import React from "react";
import "./skills.css";
import HtmlLogo from "../../assets/html.png";
import JsLogo from "../../assets/javascript.png";
import ReactLogo from "../../assets/react.png";
import CssLogo from "../../assets/css.png";
import TailwindLogo from "../../assets/tailwind.png";
import GithubLogo from "../../assets/github.png";

const Skills = () => {
  const skills = [
    { name: "JavaScript", image: JsLogo },
    { name: "TypeScript", badge: "TS" },
    { name: "React", image: ReactLogo },
    { name: "Vitest & RTL", badge: "TEST" },
    { name: "Vite", badge: "VITE" },
    { name: "Accessibility", badge: "A11Y" },
    { name: "HTML", image: HtmlLogo },
    { name: "CSS", image: CssLogo },
    { name: "Tailwind CSS", image: TailwindLogo },
    { name: "GitHub", image: GithubLogo },
  ];

  const practices = [
    {
      name: "Agile / Scrum",
      badge: "AGILE",
      detail: "Iterative delivery, standups, and sprint-based collaboration.",
    },
    {
      name: "Jira",
      badge: "JIRA",
      detail: "Issue tracking, sprint boards, and clear task ownership.",
    },
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
            Modern React and TypeScript, supported by performance profiling,
            accessible UI patterns, and automated testing.
          </p>
        </div>

        <div className="image-container">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--delay": `${index * 60}ms` }}
            >
              <div className="skill-icon">
                {skill.image ? (
                  <img src={skill.image} alt="" />
                ) : (
                  <strong>{skill.badge}</strong>
                )}
              </div>
              <p>{skill.name}</p>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        <div className="practices-block">
          <div className="practices-heading">
            <p className="section-kicker">How I work</p>
            <h3>Practices &amp; collaboration.</h3>
          </div>
          <div className="practices-grid">
            {practices.map((practice) => (
              <div className="practice-card" key={practice.name}>
                <div className="skill-icon">
                  <strong>{practice.badge}</strong>
                </div>
                <div>
                  <p>{practice.name}</p>
                  <span>{practice.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
