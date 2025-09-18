import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          MyShop
          <span className="d-block" style={{ fontSize: "12px" }}>
            Explore <span className="text-warning">Plus+</span>
          </span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <form className="d-flex mx-lg-auto my-2 my-lg-0 w-50 w-lg-50">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
            <button className="btn btn-warning ms-2" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Right side: login, more, cart */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center">
            <li className="nav-item me-2">
              <Link className="btn btn-light" to="/signin">
                Login
              </Link>
            </li>
            <li className="nav-item dropdown me-3">
              <button
                className="btn btn-primary dropdown-toggle text-white"
                id="moreDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </button>
              <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                <li>
                  <Link className="dropdown-item" to="/notifications">
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customer-care">
                    Customer Care
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/download">
                    Download App
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center"
                to="/cart"
              >
                <i className="bi bi-cart-fill fs-5 me-1"></i> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
