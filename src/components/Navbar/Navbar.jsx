import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import myLogo from "../../assets/mylogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", nav);
    return () => document.body.classList.remove("menu-open");
  }, [nav]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) setNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setNav(false);
  const navItems = ["home", "about", "skills", "work", "contact"];

  return (
    <header
      className={`nav-container ${scrolled ? "nav-scrolled" : ""} ${
        nav ? "menu-open" : ""
      }`}
    >
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="brand" to="home" smooth duration={500} onClick={closeMenu}>
          <img className="logo-img" src={myLogo} alt="Natyra Arifi" />
        </Link>

        <div className={`menu-list ${nav ? "menu-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              spy
              offset={-72}
              activeClass="active"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="nav-socials">
          <a href="https://github.com/Natyraa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/natyra-arifi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <button
          className="hamburger-menu"
          onClick={() => setNav((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={nav}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
