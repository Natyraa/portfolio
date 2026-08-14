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
              I’m Natyra, a frontend developer who enjoys transforming
              thoughtful ideas into fast and intuitive web experiences.
            </p>
            <p>
              My work combines clean React architecture, responsive interfaces,
              and close attention to the small details that make a product feel
              effortless to use.
            </p>
            <p>
              I’m always learning, experimenting, and looking for opportunities
              to collaborate on meaningful digital products.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div><strong>04</strong><span>Focused projects</span></div>
          <div><strong>Perf</strong><span>Virtualized UI</span></div>
          <div><strong>A11y</strong><span>Design system</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;