import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ShopCarousel() {
  return (
    <div id="shopCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://github.com/kaviuma/Server/blob/main/Carousel%201.jpg?raw=true"
            className="d-block w-100"
              style={{ height: "1000px", objectFit: "cover" }}

            alt="Shop Banner"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://github.com/kaviuma/Server/blob/main/Carousel%202.jpg?raw=true"
            className="d-block w-100"
            alt="Shop Deals"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://raw.githubusercontent.com/kaviuma/Server/c46f58fb98f58addeefeb5b50a9c84e9d822279f/download.jpg"
            className="d-block w-100"
            alt="Groceries"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#shopCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#shopCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ShopCarousel;
