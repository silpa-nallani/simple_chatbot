import React from "react";
import "../styles/Catalogue.css";

const Catalogue: React.FC = () => {
  return (
    <div className="shell-app">
      {/* HEADER */}
      <header className="shell-header">
        <div className="shell-header-left">
          <span className="shell-logo">SHELL</span>
          <span className="shell-divider">|</span>
          <span className="shell-project-title">3D Asset Catalogue PoC</span>
        </div>

        <div className="shell-header-right">
          <button className="icon-btn">🔔</button>

          <div className="user-badge">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-role">Design Engineer</div>
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="shell-body">
        {/* SIDEBAR */}
        <aside className="shell-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-title">Navigation</div>
            <ul className="sidebar-list">
              <li className="sidebar-item active">📚 Asset Library</li>
              <li className="sidebar-item">📁 My Projects</li>
              <li className="sidebar-item">🕒 Assembly History</li>
              <li className="sidebar-item">🗂 USD Library</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-title">Systems Engineering</div>
            <ul className="sidebar-list">
              <li className="sidebar-item">📘 MBSE Database</li>
              <li className="sidebar-item">🔗 Component Links</li>
              <li className="sidebar-item">🧩 System Blocks</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-title">Tools</div>
            <ul className="sidebar-list">
              <li className="sidebar-item">🤖 GenAI Designer</li>
              <li className="sidebar-item">⚙️ Parametric Editor</li>
              <li className="sidebar-item">✔️ Validation Tools</li>
            </ul>
          </div>

          <div className="quick-tip">
            <div className="quick-tip-icon">💡</div>
            <div>
              <div className="quick-tip-title">Quick Tip</div>
              <div className="quick-tip-text">
                Drag components from the library to the viewport.
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="shell-main">
          {/* Toolbar */}
          <div className="main-toolbar">
            <div className="toolbar-left">
              <button className="btn primary">Import USD</button>
              <button className="btn">New Assembly</button>
              <button className="btn">Save Project</button>
              <button className="btn">Export</button>
            </div>

            <input className="search-input" placeholder="Search components..." />
          </div>

          <div className="middle-layout">
            {/* COMPONENT LIBRARY */}
            <section className="component-library">
              <div className="panel-header">
                <div className="panel-title">Component Library</div>
                <select className="panel-select">
                  <option>All Categories</option>
                </select>
              </div>

              <div className="tabs">
                <button className="tab active">Components</button>
                <button className="tab">Systems</button>
                <button className="tab">Recent</button>
              </div>

              {/* Pumps */}
              <div className="component-section">
                <div className="component-section-header">▼ Pumps</div>

                <div className="component-card">
                  <div className="component-icon">🔧</div>
                  <div className="component-info">
                    <div className="component-name">Centrifugal Pump - CP-100</div>
                    <div className="component-subtext">Flow: 500 m³/h</div>
                  </div>
                  <div className="component-meta">2.5T</div>
                </div>

                <div className="component-card">
                  <div className="component-icon">🔧</div>
                  <div className="component-info">
                    <div className="component-name">Booster Pump - BP-200</div>
                    <div className="component-subtext">Flow: 300 m³/h</div>
                  </div>
                  <div className="component-meta">1.8T</div>
                </div>
              </div>

              {/* Vessels */}
              <div className="component-section">
                <div className="component-section-header">▼ Vessels</div>

                <div className="component-card">
                  <div className="component-icon">🛢</div>
                  <div className="component-info">
                    <div className="component-name">Storage Tank - ST-500</div>
                    <div className="component-subtext">Vol: 500 m³</div>
                  </div>
                  <div className="component-meta">12T</div>
                </div>
              </div>
            </section>

            {/* VIEWPORT */}
            <section className="viewport">
              <div className="viewport-inner">
                <div className="viewport-icon">🏗️</div>
                <div className="viewport-text-main">
                  Drag components here to build your facility
                </div>
              </div>

              <div className="viewport-toolbar">
                <button className="icon-square">🔍</button>
                <button className="icon-square">➕</button>
                <button className="icon-square">➖</button>
                <button className="icon-square">🔄</button>
                <button className="icon-square">🗑️</button>
              </div>
            </section>
          </div>
        </main>

        {/* RIGHT PANEL */}
        <aside className="properties-panel">
          <div className="prop-card">
            <div className="prop-title">📄 Component Details</div>
            <div className="prop-row"><label>Component ID:</label><span>-</span></div>
            <div className="prop-row"><label>Type:</label><span>-</span></div>
            <div className="prop-row"><label>Status:</label><span>-</span></div>
          </div>

          <div className="prop-card">
            <div className="prop-title">📏 Dimensions</div>
            <div className="prop-row"><label>Length (m):</label><input className="prop-input" defaultValue={0}/></div>
            <div className="prop-row"><label>Width (m):</label><input className="prop-input" defaultValue={0}/></div>
            <div className="prop-row"><label>Height (m):</label><input className="prop-input" defaultValue={0}/></div>
            <div className="prop-row"><label>Weight (T):</label><input className="prop-input" defaultValue={0}/></div>
          </div>

          <div className="prop-card">
            <div className="prop-title">🧲 Physical Properties</div>
            <div className="prop-row"><label>CoG X:</label><input className="prop-input" defaultValue={0}/></div>
            <div className="prop-row"><label>CoG Y:</label><input className="prop-input" defaultValue={0}/></div>
            <div className="prop-row"><label>CoG Z:</label><input className="prop-input" defaultValue={0}/></div>
          </div>

          <div className="prop-card">
            <div className="prop-title">⚙️ Functional Parameters</div>
            <div className="prop-row"><label>Throughput:</label><input className="prop-input" defaultValue={0}/></div>
            <div className="prop-row"><label>Pressure:</label><input className="prop-input" defaultValue={0}/></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Catalogue;
