import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router-dom";
import React, { useState } from "react";
import AuthStore from "../store/Auth.store";

function SignIn() {

let {SignIn} = AuthStore();


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Signin Data:", formData);
    alert("Signin Successful!");
  

   await SignIn(formData)

  

  };

  return (
    <div className="container mt-5">
     <div className="card p-4 shadow-lg col-md-6 mx-auto">
        <h2 className="text-center mb-4">Signin</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-success w-100">
            Signin
          </button>

          <Link to="/signup">Signup</Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
