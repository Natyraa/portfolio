import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import myLogo from "../../assets/mylogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="nav-container">
      <div>
        <img className="logo-img" src={myLogo} alt="logo img"></img>
      </div>
      {/**Menu */}
      <ul className="menu-list">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/**Hamburger */}
      <div onClick={handleClick} className="hamburger-menu">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/**Mobile Menu */}
      {nav && (
        <ul className="mobile-menu">
          <li>
            {" "}
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      {/**Social Icons */}
      <div className="social-list">
        <ul>
          <li className=" bg-blue-600">
            <a target="_blank" href="https://www.linkedin.com/in/natyra-arifi/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" bg-[#333333]">
            <a target="_blank" href="https://github.com/Natyraa">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" bg-[#6fc2b0]">
            <a target="_blank" href="mailto:natyraa1998@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=" bg-[#565f69]">
            <a target="_blank" rel="noopener noreferrer"  href="/CV.pdf">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
