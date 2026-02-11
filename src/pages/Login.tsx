import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../pages/shell-logo.png";



export default function Login() {
  const navigate = useNavigate();
  const [u, setU] = useState<string>("");
  const [p, setP] = useState<string>("");

  const login = () => {
    if (u && p) navigate("/dashboard");
    else alert("Enter credentials");
  };

  return (
    <div className="login-wrapper">

      {/* TOP NAVBAR */}
      <nav className="top-nav">
        <div className="nav-content">
          <img
            src={logo}
            alt="HCLTech Logo"
            className="nav-logo"
          />
          <h1 className="nav-title">Shell Digital Twin Platform</h1>
        </div>
      </nav>

      <div className="login-box">
        <h2>Welcome to Login Page</h2>

        <input
          placeholder="Username"
          onChange={(e) => setU(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setP(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
      {/* FOOTER */}  
      <footer className="footer">
        <p>Developed by <strong>HCLTech</strong></p>
      </footer>
    </div>
  );
}
