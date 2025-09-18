import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { PRODUCT } from "../store/product.store";

function Home() {
 let {televisions,getproduct} = PRODUCT();
 
 useEffect(()=>{
  getproduct();
 },[])

  return (
    <div className="container mt-4">
      {/* <h2 className="mb-4">Televisions</h2> */}
      <div className="row">
        {televisions.map((p) => (
          <div className="col-md-4 mb-4" key={p._id}>
            <Link to={`/desc/${p._id}`} style={{textDecoration:"none"}}>
            <div className="card h-100 shadow-sm">
              <img
                src={p.image_url}
                className="card-img-top"
                alt={p.name}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">Available : {p.quantity}</p>
                {/* <p className="card-text">{p.description}</p> */}
                {/* <h6 className="text-success">₹{p.price}</h6> */}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
