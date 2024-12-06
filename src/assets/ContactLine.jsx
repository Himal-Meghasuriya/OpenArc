import React from "react";

const ContactLine = () => {
  return (
    <div className="bg-dark text-light py-2 ContactLine">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Address and Email Section */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <i className="bi bi-geo-alt-fill me-2"></i>
          <span>#172 Poorwarama Road, Kirulapone, Colombo 05, Sri Lanka</span>
          <span className="mx-3 d-none d-md-block">|</span>
          <i className="bi bi-envelope-fill me-2"></i>
          <span>info@openarc.lk</span>
        </div>

        {/* Links and Social Media Icons */}
        <div className="d-flex align-items-center hello">
          {/* Links */}
          <div className="me-3">
            <a href="#help" className="text-light text-decoration-none mx-1">
              Help
            </a>
            /
            <a href="#support" className="text-light text-decoration-none mx-1">
              Support
            </a>
            /
            <a href="#contact" className="text-light text-decoration-none mx-1">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLine;
