import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCT } from "../store/product.store.js";

function Grocery() {
  const { getproduct, groceries } = PRODUCT();

  useEffect(() => {
    getproduct(); // fetch groceries from API
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Grocery</h2>
      <div className="row">
        {groceries.map((p) => (
          <div className="col-md-6 col-lg-4 mb-4" key={p._id}>
            <Link to={`/desc/${p._id}`} style={{ textDecoration: "none" }}>
              <div className="card h-100 shadow-sm">
                {p.image_url ? (
                  <img
                    src={p.image_url}
                    className="card-img-top"
                    alt={p.name}
                    style={{ height: "270px", objectFit: "contain" }}
                  />
                ) : (
                  <div
                    style={{
                      height: "270px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f0f0f0",
                      color: "#888",
                    }}
                  >
                    No Image
                  </div>
                )}
                <div className="card-body text-center">
                  <h5 className="card-title">{p.name}</h5>
                  {/* <p className="card-text">Stock: {p.quantity}</p> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grocery;
