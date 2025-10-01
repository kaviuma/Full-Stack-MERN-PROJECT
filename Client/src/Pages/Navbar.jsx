import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import  "../Pages/HomeNav.css";

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
     
        <Link className="navbar-brand fw-bold" to="/">
          MyShop
          <span className="d-block" style={{ fontSize: "12px" }}>
            Explore <span className="text-warning">Plus+</span>
          </span>
        </Link>

        {/* Hamburger */}
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

     
        <div className="collapse navbar-collapse" id="navbarContent">
          
          <form className="d-flex mx-lg-auto my-2 my-lg-0 w-100 w-lg-50">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
  
            />
            <button className="btn btn-primary ms-1" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Right side */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-lg-center">
            <li className="nav-item me-lg-2 mb-2 mb-lg-0" style={{border:"none"}}>
              <Link className="btn btn-light w-100 w-lg-auto" to="/signin">
                Login
              </Link>
            </li>
            <li className="nav-item dropdown me-lg-3 mb-2 mb-lg-0">
              <button
                className="btn btn-primary dropdown-toggle text-white w-100 w-lg-auto"
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
                  <Link className="dropdown-item" to="/contact">
                   Contact
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item w-100 w-lg-auto">
              <Link
                className="nav-link text-white d-flex align-items-center justify-content-center justify-content-lg-start"
                to="/cart"
              >
                <i className="bi bi-cart-fill fs-5 me-1"></i> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Ssecond Navbarr */}
     <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <ul className="navbar-nav flex-row mx-auto nav-scroll">
              <li className="nav-item px-2">
                <Link className="nav-link text-white" to="/mobiles">Mobiles</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-white" to="/laptops">Laptops</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-white" to="/electronics">Electronics</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-white" to="/televisions">Televisions</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-white" to="/fashion">Fashion</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-white" to="/grocery">Grocery</Link>
              </li>
            </ul>
          </div>
    </nav>
</>
  )
}

export default Navbar;
