import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional, for specific Navbar styles

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <a href="#delivery" id="delivery-link">Delivery to Chennai</a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="button"></button>
        </div>
        <div className="nav-right">
        <Link to="/Profile" className="Profile-btn">Profile</Link>
        <Link to="/Signup" className="Sign-btn">Sign Up</Link>
        <Link to="/Return-order" className="ReturnOrder-btn">Return-order</Link>
        <Link to="/Cart" className="Cart-btn">Cart</Link>
        </div>
      </nav>
      <nav className="second-navbar">
      <Link to="/All" className="All-btn">All</Link>
      <Link to="/Erasers" className="Erasers-btn">Erasers</Link>
        <a href="#pastels">Pastels</a>
        <a href="#paper">Paper</a>
        <a href="#sketches">Sketches</a>
        <a href="#pen-pencil">Pen & Pencil</a>
        <a href="#paint">Paint</a>
      </nav>
    </header>
  );
}

export default Navbar;