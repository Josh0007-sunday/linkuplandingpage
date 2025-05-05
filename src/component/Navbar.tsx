import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="logo">LinkUp</a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <div className="dropdown">
              <a href="#resources" className="disabled">Resources</a>
              <div className="dropdown-content">
                <a href="#templates" className="disabled">Templates and Tools</a>
                <a href="#community" className="disabled">Community</a>
                <a href="#blog" className="disabled">Blog</a>
              </div>
            </div>
            <a href="#partnerships" className="disabled">Partnerships</a>
            <a href="#about" className="disabled">About Us</a>
            <a href="#events" className="disabled">Upcoming Events</a>
          </div>
        </div>

        <button 
          className="get-involved-btn"
          onClick={() => window.location.href = 'http://linkup-ruddy.vercel.app/'}
        >
          Get Involved
        </button>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 