import React, { useState } from "react";
import { PRODUCT } from "../store/product.store";

const Checkout = () => {
   const placeOrder = PRODUCT((state) => state.placeOrder);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    products: [],
    totalPrice: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await placeOrder(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={form.name} 
        onChange={(e) => setForm({ ...form, name: e.target.value })} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={form.email} 
        onChange={(e) => setForm({ ...form, email: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Address" 
        value={form.address} 
        onChange={(e) => setForm({ ...form, address: e.target.value })} 
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
