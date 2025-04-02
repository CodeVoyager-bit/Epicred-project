import { useState } from 'react';
import jobhuntly from '../company-logos/jobhuntly1.png';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="logo">
            {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#4640DE"/>
              <path d="M16.5 8L23 12V20L16.5 24L10 20V12L16.5 8Z" fill="white"/>
            </svg> */}
            <img src={jobhuntly} style={{backgroundColor: 'white', borderRadius: '10px'}} alt="logo" />
            JobHuntly
          </a>

          <div className="nav-links">
            <a href="#" className="nav-link">Find Jobs</a>
            <a href="#" className="nav-link">Browse Companies</a>
          </div>

          <div className="auth-buttons">
            <button className="button button-text">Login</button>
            <button className="button button-primary">Sign up</button>
          </div>

          <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="nav-links">
          <a href="#" className="nav-link">Find Jobs</a>
          <a href="#" className="nav-link">Browse Companies</a>
        </div>
        <div className="auth-buttons">
          <button className="button button-text">Login</button>
          <button className="button button-primary">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 