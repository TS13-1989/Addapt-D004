import { Link } from "react-router-dom";
import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <div className="input-box">
          <label>Username</label>
          <input type="text" placeholder="Enter your username   " />
        </div>

        <div className="input-box">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <Link to="/">
          <button className="primary-btn">Register</button>
        </Link>

      </div>
    </div>
  );
}