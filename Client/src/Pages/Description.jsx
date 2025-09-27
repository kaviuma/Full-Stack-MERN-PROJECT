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
    // <div className="container py-5">
    //   <div className="card shadow-lg border-0 rounded-4 mx-auto" style={{ maxWidth: "450px" , backgroundColor: "#95adc5ff", color: "#333"  }}>
    //     <img 
    //       src={singleproduct.image_url} 
    //       className="card-img-top rounded-top-4 img-fluid p-3" 
    //       alt={singleproduct.name} 
    //        style={{ height: "300px", objectFit: "contain" }}
    //     />
    //     <div className="card-body text-center">
    //       <h3 className="card-title mb-3">{singleproduct.name}</h3>
    //       <p className="card-text text-muted mb-3">{singleproduct.description}</p>
    //       <h5 className="text-success mb-2">₹{singleproduct.price}</h5>
    //       <p className="text-secondary mb-4">Stock: {singleproduct.quantity}</p>

    //       <div className="d-flex justify-content-center gap-3 flex-wrap">
    //         <button 
    //           onClick={() => {addtocart(id)}} disabled={cs} 
    //           className="btn btn-success btn-lg shadow-sm"
    //         >
    //          {cs ? "Added to cart" : "Add to cart"}
    //         </button>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container py-2">
  <div className="card shadow-lg border-0 rounded-4 mx-auto p-3" >
    <div className="row g-3 align-items-center">
      {/* Product Image */}
      <div className="col-md-6 text-center">
        <img 
          src={singleproduct.image_url} 
          className="img-fluid rounded-4" 
          alt={singleproduct.name} 
          style={{ height: "250px", objectFit: "contain" }}       //cover or contaiin
        />
      </div>

      {/* Product Details */}
      <div className="col-md-6 text-center text-md-start">
        <h3 className="card-title mb-3">{singleproduct.name}</h3>
        <p className="text-muted mb-3">{singleproduct.description}</p>
        <h5 className="text-success mb-2">₹{singleproduct.price}</h5>
        <p className="text-secondary mb-4">Stock: {singleproduct.quantity}</p>

        <button 
          onClick={() => addtocart(id)} 
          disabled={cs} 
          className="btn btn-success btn-lg shadow-sm"
        >
          {cs ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Description;
