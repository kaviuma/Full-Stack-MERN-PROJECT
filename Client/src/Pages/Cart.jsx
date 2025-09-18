import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PRODUCT } from "../store/product.store";
import { useParams } from "react-router-dom";


const CartPage = () => {
   
  // Sample cart items (you can later fetch from backend or localStorage)
  const [cart, setCart] = useState([
    { id: 1, name: "iPhone 15", price: 70000, quantity: 1 },
    { id: 2, name: "AirPods Pro", price: 25000, quantity: 2 },
    { id: 3, name: "Apple Watch", price: 15000, quantity: 1 },
    { id: 4, name: "Samsung Galaxy", price: 45999, quantity: 3}
  ]);

//   useEffect(()=>{
//   addcart(id)
//   },[addcart,id])

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <h5>Your cart is empty!</h5>
      ) : (
        <div>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Subtotal (₹)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4>Total: ₹{total}</h4>
          <button className="btn btn-success mt-3">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
