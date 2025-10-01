import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {PRODUCT} from '../store/product.store.js'
import Footer from "./footer.jsx";

function Mobile() {
  let {getproduct , mobiles} = PRODUCT();

  useEffect(()=>{
    getproduct()
  },[])

  return (
    <>
    <div className="container mt-4 text-center">
     <h2 className="mb-4">Mobiles</h2>
      <div className="row">
        {mobiles.map((p) => (
   <div className="col-md-3 mb-4" key={p._id}>
            <Link to={`/desc/${p._id}`}
              style={{ textDecoration: "none" }} >
              <div className="card h-100 shadow-sm" style={{ width: "15rem" }}>
                <img
                  src={p.image_url}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "270px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  {/* <p className="card-text">Stock: {p.quantity}</p> */}
                  {/* <p className="card-text">{p.description}</p> */}
                  {/* <h6 className="text-success">₹{p.price}</h6> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
     
    </div>
     <Footer/>
     </>
  );
}

export default Mobile;
