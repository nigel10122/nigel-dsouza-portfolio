import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              {isHomePage ? (
                <>
                  <a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </a>
                  <div className="dropdown-menu" aria-labelledby="homeDropdown">
                    <ScrollLink smooth={true} to="home" className="dropdown-item">Home</ScrollLink>
                    <ScrollLink smooth={true} to="about" offset={-110} className="dropdown-item">About Me</ScrollLink>
                    <ScrollLink smooth={true} to="skills" offset={-110} className="dropdown-item">Skills</ScrollLink>
                    <ScrollLink smooth={true} to="education" offset={-110} className="dropdown-item">Education</ScrollLink>
                    <ScrollLink smooth={true} to="services" offset={-110} className="dropdown-item">Services</ScrollLink>
                    <ScrollLink smooth={true} to="experience" offset={-110} className="dropdown-item">Experience</ScrollLink>
                    <ScrollLink smooth={true} to="contacts" offset={-110} className="dropdown-item">Contact Me</ScrollLink>
                  </div>
                </>
              ) : (
                <RouterLink to="/" className="nav-link">Home</RouterLink>
              )}
            </li>

            {/* Always visible route */}
            <li className="nav-item">
              <RouterLink to="/extraordinary" className="nav-link">Extraordinary-Abilities</RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
