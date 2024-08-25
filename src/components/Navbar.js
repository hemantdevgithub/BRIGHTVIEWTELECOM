import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4 px-lg-5">
        <a href="/" className="navbar-brand d-flex align-items-center">
       
          <img src="logo-nav.png" alt="Logo" className="rounded-2" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-uppercase text-secondary fw-bold"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-uppercase text-secondary fw-bold"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link text-uppercase text-secondary fw-bold"
                activeClassName="active"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/clients"
                className="nav-link text-uppercase text-secondary fw-bold"
                activeClassName="active"
              >
                Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/awards"
                className="nav-link text-uppercase text-secondary fw-bold"
                activeClassName="active"
              >
                Awards
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-uppercase text-secondary fw-bold"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className="btn btn-outline-primary ms-3 rounded-pill px-4 py-2"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
