import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center">
        
        <Link to={"/"} className="navbar-brand">OR</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body d-lg-flex align-items-center justify-content-between w-100">
            <ul className="navbar-nav mx-lg-auto text-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/projects"} className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>

              <li className="nav-item d-flex justify-content-center mt-2 mt-lg-0">
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn"
                >
                  {theme === "light" ? <i className="bi bi-moon-fill"></i> : <i class="bi bi-sun-fill"></i>}
                </button>
              </li>
            </ul>

            <div className="d-flex justify-content-lg-end">
              <Link to={'/contact'}>
              <button className="contact-btn">
                Contact Me
              </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;