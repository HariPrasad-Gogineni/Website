import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH-v-ZfW_BcXRgnMblp5f7ItqynRQMbptSg&s" alt="Apollo Hospitals Logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#overview">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
