import React from 'react';
import './Footer.css'; // Optional, for specific footer styles

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
