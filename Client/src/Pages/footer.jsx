import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="bg-primary text-light pt-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start g-4">
       
          <div className="col-12 col-md-4">
            <h5 className="d-flex justify-content-center justify-content-md-start align-items-center mb-3">
              <img
                src="https://raw.githubusercontent.com/kaviuma/Server/f3c3eda5c989b16e71fe42df74d0ef346ec2361c/Logo.jpg"
                alt="My Shop Logo"
                className="me-2"
                style={{ borderRadius: "5px", width: "70px" }}
              />
              My Shop
            </h5>
            <p>
              Your one-stop destination for Electronics, mobiles, laptops, and
              more. Quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start footer-links">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/cart" className="text-light">Cart</a></li>
              <li><a href="/electronics" className="text-light">Electronics</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <p><i className="bi bi-envelope-at-fill me-2"></i>Gmail</p>
            <p><i className="bi bi-instagram me-2"></i>Instagram</p>
            <p><i className="bi bi-whatsapp me-2"></i>WhatsApp</p>
            <p><i className="bi bi-facebook me-2"></i>Facebook</p>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center pb-3">
          © {new Date().getFullYear()} My Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
