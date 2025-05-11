import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Close Bootstrap dropdown after clicking a link
  const closeDropdown = () => {
    const dropdown = document.getElementById("navbarSupportedContent");
    if (dropdown && dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }

    const backdrop = document.querySelector(".navbar-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              {isHomePage ? (
                <>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="homeDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <div className="dropdown-menu" aria-labelledby="homeDropdown">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      Home
                    </ScrollLink>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      About Me
                    </ScrollLink>
                    <ScrollLink
                      to="skills"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      Skills
                    </ScrollLink>
                    <ScrollLink
                      to="education"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      Education
                    </ScrollLink>
                    <ScrollLink
                      to="services"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      Services
                    </ScrollLink>
                    <ScrollLink
                      to="experience"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      Experience
                    </ScrollLink>
                    <ScrollLink
                      to="contacts"
                      smooth={true}
                      duration={500}
                      offset={-110}
                      spy={true}
                      className="dropdown-item"
                      onClick={closeDropdown}
                    >
                      Contact Me
                    </ScrollLink>
                  </div>
                </>
              ) : (
                <RouterLink to="/" className="nav-link">
                  Home
                </RouterLink>
              )}
            </li>

            {/* Always visible route */}
            <li className="nav-item">
              <RouterLink to="/extraordinary" className="nav-link">
                Extraordinary-Abilities
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
