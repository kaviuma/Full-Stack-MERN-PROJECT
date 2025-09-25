import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT } from "../store/product.store";

const Description = () => {
  let { id } = useParams();
  let { singleproduct, getsingleproduct, addcart } = PRODUCT();

  let [cs,setcs] = useState(false)

  function addtocart(id){
    addcart(id)
    setcs(true)
  }

  useEffect(() => {
    getsingleproduct(id);  
  }, [id, getsingleproduct]);

  if (!singleproduct) {
    return <p className="text-center mt-5 text-secondary">Loading product details...</p>;
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 mx-auto" style={{ maxWidth: "600px" }}>
        <img 
          src={singleproduct.image_url} 
          className="card-img-top rounded-top-4 img-fluid p-3" 
          alt={singleproduct.name} 
        />
        <div className="card-body text-center">
          <h3 className="card-title mb-3">{singleproduct.name}</h3>
          <p className="card-text text-muted mb-3">{singleproduct.description}</p>
          <h5 className="text-success mb-2">₹{singleproduct.price}</h5>
          <p className="text-secondary mb-4">Stock: {singleproduct.quantity}</p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              onClick={() => {addtocart(id)}} disabled={cs} 
              className="btn btn-success btn-lg shadow-sm"
            >
             {cs ? "Added to cart" : "Add to cart"}
            </button>
            {/* <button 
              className="btn btn-dark btn-lg shadow-sm"
            >
              Order
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
