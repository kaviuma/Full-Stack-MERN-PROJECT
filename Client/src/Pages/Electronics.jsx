import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PRODUCT } from "../store/product.store";
import Footer from "./footer";

function Electronics() {
  let {electronics,getproduct} = PRODUCT();

  useEffect(()=>{
    getproduct()
  },[])



  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Electronics</h2> 
      <div className="row">
        {electronics.map((p) => (
          <div className="col-md-3 mb-4" key={p._id}>
            <Link to={`/desc/${p._id}`} style={{ textDecoration: "none"}}>
            <div className="card h-100 shadow-sm" style={{ width: "15rem" }}>
              <img
                src={p.image_url}
                className="card-img-top"
                alt={p.name}
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
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

export default Electronics;
