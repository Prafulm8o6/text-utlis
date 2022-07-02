import React from "react";

import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.bgmode} py-lg-4 shadow-sm sticky-top active ${props.bgmode === 'dark' ? 'border-1 border-bottom border-info ' : ' '} `}>
        <div className="container-fluid">
          {/* <Link
            className="navbar-brand text-center fs-3 fw-bold"
            to="/"
          >
            <span className="icon px-2 text-info">
              <i className="bi bi bi-body-text fs-1"></i>
            </span>
            <span className="px-2 text-info">{props.title1}</span>
            <span className="p-2 text-white bg-warning rounded-3">
              {props.title2}
            </span>
          </Link> */}
          <a
            className="navbar-brand text-center fs-3 fw-bold"
            href="#"
          >
            <span className="icon px-2 text-info">
              <i className="bi bi bi-body-text fs-1"></i>
            </span>
            <span className="px-2 text-info">{props.title1}</span>
            <span className="p-2 text-white bg-warning rounded-3">
              {props.title2}
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fw-bolder"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav gap-2 gap-md-3 gap-lg-5 col justify-content-center">
              <hr className="d-none d-lg-block d-md-block" />              
              {/* <li className="nav-item">
                <Link
                  className="nav-link fs-5 text-center"
                  aria-current="page"
                  to="/"
                >
                  <span className="nav-link-border py-2">Home</span>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className="nav-link fs-5 text-center"
                  aria-current="page"
                  to="/about"
                >
                  <span className="nav-link-border py-2">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 text-center"
                  aria-current="page"
                  to="/contact"
                >
                  <span className="nav-link-border py-2">Contact</span>
                </Link>
              </li> */}
            </ul>
            <div className="d-flex mx-lg-5 justify-content-center">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title1: PropTypes.string.isRequired, title2: PropTypes.string.isRequired }; // propTypes

Navbar.defaultProps = { title1: "Text", title2: "Utils" }; // Default Props

export default Navbar;
