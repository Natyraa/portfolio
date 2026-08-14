import React from "react";
import "./work.css";
import { data } from "../../data/data.js";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight, HiOutlineGlobeAlt } from "react-icons/hi2";

const Work = () => {
  return (
    <section name="work" className="work-container">
      <div className="section-shell">
        <div className="work-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Projects built with purpose.</h2>
          </div>
          <p className="section-copy">
            A focused set of applications covering performance engineering,
            reusable components, test-driven logic, and solid vanilla JavaScript.
          </p>
        </div>

        <div className="card-container">
          {data.map(
            (
              { id, name, image, description, stack, status, github, liveUrl },
              index
            ) => (
              <article key={id} className="project-card">
                <div className="project-image">
                  <img src={image} alt="" />
                  <span>0{index + 1}</span>
                  {status && <em className="project-status">{status}</em>}
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{name}</h3>
                    {(liveUrl || github) && <HiArrowUpRight />}
                  </div>
                  <p>{description}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo of ${name}`}
                        >
                          <HiOutlineGlobeAlt />
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${name} on GitHub`}
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
