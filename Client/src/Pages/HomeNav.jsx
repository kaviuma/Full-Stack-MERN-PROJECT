
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeNav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-black">
      <div className="container">
        

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center menu */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/mobiles">Mobiles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/laptops">Laptops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics">Electronics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/televisions">Televisions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fashion">Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/grocery">Grocery</Link>
            </li>
          </ul>

         
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
