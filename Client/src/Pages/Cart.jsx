import React, { useEffect, useState } from "react";
import { PRODUCT } from "../store/product.store";

const CartPage = () => {
  const { item, getAllCart, removeCartItem, placeOrder } = PRODUCT();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [quantities, setQuantities] = useState({});

  // Load cart on mount
  useEffect(() => {
    getAllCart();
  }, [getAllCart]);

  // Handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle quantity change
  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, value) }));
  };

  // Remove item
  const removeFromCart = (id) => {
    
    removeCartItem(id);

  };
  // Calculate total price
  const totalPrice =
    item?.reduce(
      (acc, p) => acc + p.price * (quantities[p._id] || 1),
      0
    ) || 0;

  // Place order
  const handleOrder = () => {
    const orderData = {
      ...formData,
      products: item.map((p) => ({
        productId: p._id,
        name: p.name,
        price: p.price,
        image_url: p.image_url,
        quantity: quantities[p._id] || 1,
      })),
      totalPrice,
    };
    placeOrder(orderData);
  };

  if (!item || item.length === 0)
    return <p className="text-center text-muted mt-5">No items in cart!</p>;

  return (
    <div className="container mt-5" >
      <h2 className="mb-4 text-center">
        <i className="bi bi-cart-fill"></i> Your Cart
      </h2>

      <div className="row">
        {item.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card h-100 shadow-sm text-center">
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "contain" }}
                />
              )}
              <div className="card-body">
                <h5>{product.name}</h5>
                <p className="fw-bold">₹{product.price}</p>

                {/* Quantity Controls */}
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      handleQuantityChange(
                        product._id,
                        (quantities[product._id] || 1) - 1
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantities[product._id] || 1}
                    min="1"
                    className="form-control mx-2 text-center"
                    style={{ width: "60px" }}
                    onChange={(e) =>
                      handleQuantityChange(product._id, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      handleQuantityChange(
                        product._id,
                        (quantities[product._id] || 1) + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                {/* Remove button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(product._id)}
                >
                  <i className="bi bi-trash3-fill"></i> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="text-end mt-3">
        <h5>Total: ₹{totalPrice}</h5>
        <button
          className="btn btn-success mt-2"
          data-bs-toggle="modal"
          data-bs-target="#orderModal"
        >
          Proceed to Order
        </button>
      </div>

      {/* Checkout Modal */}
      <div className="modal fade" id="orderModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Order</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {/* Order Summary */}
              <ul className="list-group mb-3">
                {item.map((p) => (
                  <li key={p._id} className="list-group-item d-flex justify-content-between">
                    <span>
                      {p.name} × {quantities[p._id] || 1}
                    </span>
                    <span>₹{p.price * (quantities[p._id] || 1)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </li>
              </ul>

              {/* Customer Info */}
              <input
                className="form-control mb-2"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={handleOrder}
                data-bs-dismiss="modal"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
