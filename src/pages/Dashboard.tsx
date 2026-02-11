import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import logo from "../pages/shell-logo.png";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <header className="dash-header">
        <div className="logo"><img src={logo} alt="Shell Logo" /></div>
        <div className="title">Shell Digital Twin Platform</div>
      </header>

      <div className="dash-content">
        <h2>Our Features</h2>

        <div className="cards">
          <div className="card" onClick={() => navigate("/spatial")}>
            <h3>Spatial / 3D Source of Truth</h3>
            <p>Centralized spatial data for accurate decision-making.</p>
          </div>

          <div className="card" onClick={() => navigate("/catalogue")}>
            <h3>3D Asset Catalogue</h3>
            <p>View, filter & organize 3D assets.</p>
          </div>

          <div className="card" onClick={() => navigate("/simulation")}>
            <h3>Simulate Before Build</h3>
            <p>Run digital simulations before construction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
