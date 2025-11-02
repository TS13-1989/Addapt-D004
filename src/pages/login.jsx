import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <div className="input-box">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <Link to="/Nav">
            <button className="primary-btn">Login</button>
        </Link>

        <p className="auth-switch">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
