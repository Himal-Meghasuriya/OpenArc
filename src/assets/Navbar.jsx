import React from "react";
import Logo from "../components/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" >
    <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" height="40" />
        </a>
        <button
          className="navbar-toggler btn-outline-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bolder ">
            <li className="nav-item me-5">
              <a className="nav-link " href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#services">
                Our Service
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#team">
                Team RAD
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
