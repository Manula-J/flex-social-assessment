import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="logo.png" alt="Logo" className="navbar-logo" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5">
            <li className="nav-item  px-lg-2">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item  px-lg-2">
              <a className="nav-link" href="/products" aria-current="page">
                Products
              </a>
            </li>
            <li className="nav-item  px-lg-2">
              <a className="nav-link" href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
