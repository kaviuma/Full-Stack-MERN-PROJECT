import React from "react";

const Contact = () => {
  return (
    <div className="container my-5" style={{position:"relative",left:"40px",top:"80px"}}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 border p-3 rounded mt-4 mt-md-0">
          <h3 className="mb-3">Contact</h3>
          <p><i className="bi bi-envelope-at-fill me-2"></i>myshop@gmail.com</p>
          <p><i className="bi bi-telephone-fill me-2"></i>+91 1234567890</p>
          <p><i className="bi bi-shop me-2"></i>Tenkasi,TamilNadu   </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
