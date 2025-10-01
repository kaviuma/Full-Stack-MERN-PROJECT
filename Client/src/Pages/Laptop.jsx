import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { PRODUCT } from "../store/product.store";
import Footer from "./footer";

function Laptop() {
  const {laptops, getproduct} = PRODUCT();

useEffect(()=>{
  getproduct()
},[])
   
  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Laptops</h2>
      <div className="row">
        {laptops.map((p) => (
<div className="col-md-3 mb-4" key={p._id}>
   <Link to={`/desc/${p._id}`}
           style={{ textDecoration: "none"}} >
            <div className="card h-100 shadow-sm" style={{ width: "15rem" }}>
              <img src={p.image_url} className="card-img-top" alt={p.name}  style={{ height: "290px", objectFit: "contain" }}/>
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

export default Laptop;
