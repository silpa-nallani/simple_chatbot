import React from "react";
import {
  FaUserCircle,
  FaBars,
  FaIndustry,
  FaCogs,
  FaCubes,
  FaRobot,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/Spatial.css";

const Spatial: React.FC = () => {
  return (
    <div className="shell-layout">
      {/* TOP NAVBAR */}
      <header className="shell-headers">
        <div className="shell-headers-left">
          <div className="shell-logo-circles" />
          <span className="shell-header-titles">
            SPATIAL / 3D SOURCE OF TRUTH
          </span>
        </div>

        <div className="shell-header-rights">
          <FaUserCircle className="shell-header-users" />
          <div className="shell-header-menus">
            <FaBars />
          </div>
        </div>
      </header>

      {/* BODY: SIDEBAR + MAIN */}
      <div className="shell-bodys">
        {/* SIDEBAR */}
        <aside className="shell-sidebars">
          <div className="shell-sidebars-title">Navigation</div>
          <ul>
            <li className="active">Data Ingestion</li>
            <li>Version Control</li>
            <li>API Access</li>
            <li>Search &amp; Discovery</li>
            <li>Collaboration</li>
            <li>Low-Code Integration</li>
            <li>Documentation</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="shell-mains">
          <div className="shell-grids">
            {/* LEFT COLUMN – 3 STACKED CARDS */}
            <div className="grid-left">
              {/* Data Ingestion */}
              <section className="shell-card ingestion-card">
                <div className="card-header-row">
                  <h2>Data Ingestion</h2>
                </div>

                <button className="primary-btn">Upload Asset</button>

                <h4 className="section-heading">Ingestion Pipeline</h4>
                <div className="ingestion-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Asset</th>
                        <th>Format</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Asset a</td>
                        <td>IFC</td>
                        <td>
                          <span className="status-pill">Converted</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Asset c</td>
                        <td>OBJ</td>
                        <td>
                          <span className="status-pill">Converted</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Asset b</td>
                        <td>E57</td>
                        <td>
                          <span className="status-pill">Converted</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* API Access */}
              <section className="shell-card">
                <h3>API Access</h3>
                <div className="api-list">
                  <input readOnly value="/api/assets" />
                  <input readOnly value="/api/assets/12345" />
                  <input readOnly value="/api/assets/upload" />
                  <input readOnly value="/api/search" />
                  <div className="api-last-row">
                    <input readOnly value="/api/version" />
                    <button className="secondary-btn">Submit</button>
                  </div>
                </div>
              </section>

              {/* Asset thumbnails / icons */}
              <section className="shell-card">
                <h3>Search &amp; Discovery</h3>
                <div className="thumb-row">
                  <div className="thumb">
                    <FaIndustry />
                  </div>
                  <div className="thumb">
                    <FaCogs />
                  </div>
                  <div className="thumb">
                    <FaCubes />
                  </div>
                  <div className="thumb">
                    <FaRobot />
                  </div>
                </div>
              </section>
            </div>

            {/* MIDDLE COLUMN – Version Control */}
            <section className="shell-card grid-middle">
              <h2>Version Control</h2>

              <div className="subcard">
                <h4 className="section-heading">Metadata Schema</h4>
                <div className="metadata-row">
                  <div className="metadata-logo">
                    <FaCubes />
                  </div>
                  <span>Shell OpenUSD</span>
                </div>
              </div>

              <div className="subcard">
                <h4 className="section-heading">Asset Lineage</h4>
                <div className="lineage">
                  <div className="lineage-row">
                    <span>Asset v4</span>
                    <span className="line-dot" />
                  </div>
                  <div className="lineage-row">
                    <span>Asset v3</span>
                    <span className="line-dot" />
                  </div>
                  <div className="lineage-row">
                    <span>Asset v2</span>
                    <span className="line-dot" />
                  </div>
                </div>
                <button className="secondary-btn rollback-btn">
                  Rollback
                </button>
              </div>
            </section>

            {/* RIGHT COLUMN – Evergreening + Collaboration */}
            <div className="grid-right">
              {/* Evergreening */}
              <section className="shell-card">
                <h2>Evergreening</h2>
                <div className="bar-chart">
                  <div className="bar h1" />
                  <div className="bar h2" />
                  <div className="bar h3" />
                  <div className="bar h4" />
                  <div className="bar h5" />
                </div>
              </section>

              {/* Collaboration */}
              <section className="shell-card">
                <h2>Collaboration</h2>
                <div className="collab-row">
                  <div className="collab-stage">
                    <div className="collab-circle" />
                    <span>Proposed</span>
                  </div>
                  <FaChevronRight className="collab-arrow" />
                  <div className="collab-stage">
                    <div className="collab-circle active" />
                    <span>Review</span>
                  </div>
                  <FaChevronRight className="collab-arrow" />
                  <div className="collab-stage">
                    <div className="collab-circle actives" />
                    <span>Approved</span>
                  </div>
                </div>
              </section>
            </div>

            {/* SEARCH & DISCOVERY COMMENTS – ONLY UNDER MIDDLE + RIGHT */}
            <section className="shell-card grid-search">
              <h2>Search &amp; Discovery</h2>

              <div className="search-input-wrap">
                <input
                  className="search-input"
                  placeholder="Search"
                />
              </div>

              {/* Row 1 */}
              <div className="comment-row">
                <div className="avatar-icon">
                  <FaUserCircle />
                </div>
                <div className="comment-main">
                  <div className="comment-top">
                    <span className="comment-name">John Supia</span>
                    <span className="comment-time">15 min. ago</span>
                  </div>
                  <p>Test is a employel. Queant C.</p>
                </div>
                <div className="comment-right">
                  <button className="chip-btn">Reply</button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="comment-row">
                <div className="avatar-icon">
                  <FaUserCircle />
                </div>
                <div className="comment-main">
                  <div className="comment-top">
                    <span className="comment-name">Max Miuster</span>
                    <span className="comment-time">10 min. ago</span>
                  </div>
                  <p>Tests a quest comment.</p>
                </div>
                <div className="comment-right">
                  <button className="review-btn">Review</button>
                </div>
              </div>

              {/* Row 3 */}
              <div className="comment-row">
                <div className="avatar-icon">
                  <FaUserCircle />
                </div>
                <div className="comment-main">
                  <div className="comment-top">
                    <span className="comment-name">Otiva Alexic</span>
                    <span className="comment-time">17 min. ago</span>
                  </div>
                  <p>Can approve a comment?</p>
                </div>
                <div className="comment-right">
                  <button className="approve-btn">Approve</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Spatial;
