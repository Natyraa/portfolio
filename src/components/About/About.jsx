import React from 'react';
import './about.css'

const About = () => {
  return (
    <section name="about" className="about-container">
      <div className="section-shell">
        <p className="section-kicker">About me</p>
        <div className="about-grid">
          <div>
            <h2 className="section-title">
              Turning ideas into useful, polished products.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Natyra, a frontend developer focused on building fast,
              intuitive, and inclusive web experiences.
            </p>
            <p>
              My recent work explores large-list performance, reusable component
              architecture, keyboard accessibility, and testable business logic
              with React and TypeScript.
            </p>
            <p>
              I care about choosing the right tool for the problem—whether that
              means React 19 for complex interfaces or focused vanilla
              JavaScript for a smaller product.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div><strong>04</strong><span>Focused projects</span></div>
          <div><strong>React</strong><span>Performance engineering</span></div>
          <div><strong>UI</strong><span>Accessible by design</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;