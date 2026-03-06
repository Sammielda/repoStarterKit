import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-logo">
      <div className="logo-icon logo-initials">SC</div>
      Samuel Charris
    </Link>

    <ul className="navbar-links">
      <li><Link to="/" className="nav-link active">Home</Link></li>
      <li><span className="chevron">›</span></li>
      <li><Link to="/about" className="nav-link">About</Link></li>
      <li><span className="chevron">›</span></li>
      <li><Link to="/features" className="nav-link">Features</Link></li>
      <li><span className="chevron">›</span></li>
      <li><Link to="/services" className="nav-link">Services</Link></li>
      <li><span className="chevron">›</span></li>
      <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
      <li><span className="chevron">›</span></li>
      <li><Link to="/spanish-club" className="nav-link">Spanish Club</Link></li>
    </ul>

    <div className="navbar-icons">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
  </nav>
);

export default NavBar;
