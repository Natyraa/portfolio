import React from "react";
import "./home.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="home-container">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="section-shell hero-content">
        <div className="availability">
          <span />
          Available for new opportunities
        </div>
        <p className="hero-eyebrow">Hello, I’m</p>
        <h1>Natyra Arifi.</h1>
        <h2>
          I build fast, accessible <span>React experiences.</span>
        </h2>
        <p className="hero-copy">
          Frontend developer specializing in React 19, TypeScript, performance,
          accessibility, and well-tested user interfaces.
        </p>

        <div className="hero-actions">
          <Link className="primary-action" to="work" smooth duration={500}>
            Explore my work <HiArrowNarrowRight />
          </Link>
          <Link className="secondary-action" to="contact" smooth duration={500}>
            Let’s talk
          </Link>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/Natyraa" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/natyra-arifi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
};

export default Home;