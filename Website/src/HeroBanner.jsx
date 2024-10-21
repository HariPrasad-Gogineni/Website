import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/a3c4da47098515.Y3JvcCwxMjg0LDEwMDUsMCww.jpg" alt="Apollo Ahmedabad Banner" />
      <div className="banner-content">
        <h1>Apollo Hospitals Ahmedabad</h1>
        <p>World-Class Healthcare Services</p>
      </div>
    </div>
  );
}

export default HeroBanner;
