import React from "react";
import "../styles/SimulationDashboard.css";

const SimulationDashboard: React.FC = () => {
  return (
    <div className="sd-root">
      {/* HEADER */}
      <header className="sd-header">
        <div className="sd-header-left">
          <span className="sd-logo">SHELL</span>
          <span className="sd-divider">|</span>
          <span className="sd-title">Simulate Before Build PoC</span>
        </div>

        <div className="sd-header-right">
          <button className="sd-bell">🔔</button>

          <div className="sd-user">
            <div className="sd-avatar">JD</div>
            <div>
              <div className="sd-user-name">John Doe</div>
              <div className="sd-user-role">Operations Engineer</div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="sd-main">
        
        {/* LEFT NAVIGATION */}
        <aside className="sd-left-nav">
          <div className="sd-nav-section">
            <div className="sd-nav-title">SIMULATION</div>
            <div className="sd-nav-item sd-nav-active">
              <span className="sd-nav-icon">🤖</span>
              Robot Simulation
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🌬</span>
              CFD Analysis
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">⚠️</span>
              Hazard Zones
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">📊</span>
              Analytics
            </div>
          </div>

          <div className="sd-nav-section">
            <div className="sd-nav-title">SCENARIOS</div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🧭</span>
              Inspection Routes
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🛠</span>
              Maintenance Tasks
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🚨</span>
              Emergency Response
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🎥</span>
              Video Recordings
            </div>
          </div>

          <div className="sd-nav-section">
            <div className="sd-nav-title">ASSETS</div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🧩</span>
              Platform Models
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">🤖</span>
              Robot Models
            </div>
            <div className="sd-nav-item">
              <span className="sd-nav-icon">📁</span>
              USD Files
            </div>
          </div>

          <div className="sd-ready-card">
            <span className="sd-ready-title">Simulation Ready</span>
            <span className="sd-ready-text">
              Platform model and robot loaded successfully.
            </span>
          </div>
        </aside>

        {/* CENTER & RIGHT CONTENT */}
        <div className="sd-center-right">

          {/* ACTION TOOLBAR */}
          <div className="sd-action-row">
            <button className="sd-btn sd-btn-green">▶ Run Simulation</button>
            <button className="sd-btn sd-btn-yellow">⏸ Pause</button>
            <button className="sd-btn sd-btn-red">⏹ Stop</button>
            <button className="sd-btn">⟳ Reset</button>
            <button className="sd-btn sd-btn-blue">📂 Load Scenario</button>
            <button className="sd-btn">💾 Save</button>
            <button className="sd-btn">⏺ Record</button>
          </div>

          <div className="sd-columns">

            {/* LEFT CONTROL COLUMN */}
            <div className="sd-control-col">
              <div className="sd-section-title">Simulation Control</div>

              <div className="sd-tabs">
                <button className="sd-tab sd-tab-active">Robot</button>
                <button className="sd-tab">CFD</button>
                <button className="sd-tab">Path</button>
              </div>

              {/* ROBOT CONFIG */}
              <div className="sd-card">
                <div className="sd-card-title">Robot Configuration</div>

                <div className="sd-config-card sd-config-primary">
                  <div className="sd-config-title">Boston Dynamics Spot</div>
                  <div className="sd-config-sub">
                    Quadruped robot for inspection and monitoring tasks
                  </div>
                  <span className="sd-status sd-status-active">Active</span>
                </div>

                <div className="sd-config-card">
                  <div className="sd-config-title">Inspection Drone</div>
                  <div className="sd-config-sub">
                    Aerial inspection for hard-to-reach areas
                  </div>
                  <span className="sd-status sd-status-ready">Ready</span>
                </div>
              </div>

              {/* ROBOT PARAMETERS */}
              <div className="sd-card">
                <div className="sd-card-title">Robot Parameters</div>

                <div className="sd-param-row">
                  <span>Speed</span>
                  <span className="sd-param-value">2.5 m/s</span>
                </div>
                <input type="range" min="0" max="5" defaultValue="2.5" className="sd-slider" />

                <div className="sd-param-row">
                  <span>Battery Level</span>
                  <span className="sd-param-value">85%</span>
                </div>
                <input type="range" min="0" max="100" defaultValue="85" className="sd-slider" />

                <div className="sd-param-row">
                  <span>Navigation Mode</span>
                  <select className="sd-select">
                    <option>Autonomous</option>
                  </select>
                </div>
              </div>

              {/* ZONE RESTRICTIONS */}
              <div className="sd-card">
                <div className="sd-card-title">Zone Restrictions</div>

                <label className="sd-checkbox-row">
                  <input type="checkbox" defaultChecked />
                  <span>Safe Zones Only</span>
                </label>
              </div>
            </div>

            {/* MIDDLE VIEWPORT COLUMN */}
            <div className="sd-viewport-col">
              <div className="sd-floating-status">
                <div className="sd-status-row">
                  <span className="sd-status-label">Robot Status:</span>
                  <span className="sd-status-value sd-value-active">Active</span>
                </div>
                <div className="sd-status-row">
                  <span className="sd-status-label">Position:</span>
                  <span className="sd-status-value">X: 12.5, Y: 8.3</span>
                </div>
                <div className="sd-status-row">
                  <span className="sd-status-label">Current Zone:</span>
                  <span className="sd-status-value sd-value-safe">Safe</span>
                </div>
                <div className="sd-status-row">
                  <span className="sd-status-label">Battery:</span>
                  <span className="sd-status-value">85%</span>
                </div>
                <div className="sd-status-row">
                  <span className="sd-status-label">Speed:</span>
                  <span className="sd-status-value">2.5 m/s</span>
                </div>
              </div>

              <div className="sd-map">
                <div className="sd-zone sd-safe">Safe Zone</div>
                <div className="sd-zone sd-semi">Semi-Hazard</div>
                <div className="sd-zone sd-hazard">Hazard Zone</div>

                <div className="sd-robot-dot">🤖</div>
              </div>

              <div className="sd-map-toolbar">
                <button className="sd-map-btn">🖱️</button>
                <button className="sd-map-btn">🔍</button>
                <button className="sd-map-btn">➕</button>
                <button className="sd-map-btn">➖</button>
                <button className="sd-map-btn">🔄</button>
                <button className="sd-map-btn">📐</button>
                <button className="sd-map-btn">❌</button>
              </div>
            </div>

            {/* RIGHT DATA COLUMN */}
            <div className="sd-data-col">

              {/* SIMULATION TIME */}
              <div className="sd-data-card sd-data-blue">
                <div className="sd-data-header">Simulation Data</div>
                <div className="sd-time-value">00:03:45</div>
                <div className="sd-time-label">Simulation Time</div>

                <div className="sd-time-bar">
                  <div className="sd-time-fill"></div>
                </div>
              </div>

              {/* PERFORMANCE METRICS */}
              <div className="sd-data-card">
                <div className="sd-data-subtitle">📊 Performance Metrics</div>

                <div className="sd-metric-row"><span>Coverage:</span><span>78%</span></div>
                <div className="sd-metric-row"><span>Distance Traveled:</span><span>125.4 m</span></div>
                <div className="sd-metric-row"><span>Obstacles Detected:</span><span>12</span></div>
                <div className="sd-metric-row"><span>Safety Violations:</span><span className="sd-good">0</span></div>
                <div className="sd-metric-row"><span>Task Progress:</span><span>65%</span></div>
              </div>

              {/* CFD DATA */}
              <div className="sd-data-card">
                <div className="sd-data-subtitle">🌫 CFD Data</div>

                <div className="sd-alert-box">
                  <div className="sd-alert-icon">⚠️</div>
                  <div>
                    <div className="sd-alert-title">Leak Detected</div>
                    <div className="sd-alert-sub">CFD simulation shows gas dispersion in Zone 3</div>
                  </div>
                </div>

                <div className="sd-metric-row"><span>Leak Rate:</span><span className="sd-bad">2.5 kg/s</span></div>
                <div className="sd-metric-row"><span>Wind Speed:</span><span>5.2 m/s</span></div>
                <div className="sd-metric-row"><span>Concentration:</span><span className="sd-bad">450 ppm</span></div>
                <div className="sd-metric-row"><span>Dispersion Area:</span><span>85 m²</span></div>
              </div>

              {/* NAVIGATION EFFECTIVENESS */}
              <div className="sd-data-card">
                <div className="sd-data-subtitle">🧭 Navigation Analysis</div>
                <div className="sd-metric-row"><span>Path Efficiency:</span><span>92%</span></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SimulationDashboard;
