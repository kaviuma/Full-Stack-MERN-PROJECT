import React from "react";

function Notifications() {
  return (
    <div className="container mt-4">
      <h3> Notifications</h3>
      <ul className="list-group">
        <li className="list-group-item">Your order #1234 has been shipped</li>
        <li className="list-group-item">Your cart has 2 items waiting</li>
        <li className="list-group-item">Special discount today</li>
      </ul>
    </div>
  );
}

export default Notifications;
