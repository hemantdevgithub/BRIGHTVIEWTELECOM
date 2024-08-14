// src/components/Navbar.js
import React from "react";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container-fluid nav-bar p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="display-5 text-secondary m-0">
              <img src="" className="img-fluid" alt="" />
              BRIGHTVIEWTELECOM
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Services
              </NavLink>
              <NavLink
                to="/clients"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Clients
              </NavLink>
              <NavLink
                to="/awards"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Awards
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </div>
            <button
              className="btn btn-primary btn-md-square border-secondary mb-3 mb-md-3 mb-lg-0 me-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
