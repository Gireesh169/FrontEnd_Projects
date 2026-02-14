import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">🛡️</span>
        <div>
          <div className="sidebar-title">LIC Agent</div>
          <div className="sidebar-subtitle">Dashboard</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentPage('dashboard')}
        >
          <span className="nav-icon">📊</span>
          Dashboard
        </button>

        <button
          className={`nav-item ${currentPage === 'policies' ? 'active' : ''}`}
          onClick={() => setCurrentPage('policies')}
        >
          <span className="nav-icon">📋</span>
          Policies
        </button>
      </nav>

      <div className="sidebar-footer">
        <p className="footer-version">v1.0.0</p>
        <p className="footer-tagline">Made for Hackathon</p>
      </div>
    </aside>
  );
}

export default Sidebar;
