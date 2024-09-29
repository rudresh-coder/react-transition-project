import React from "react";
import './Navbar.css';
import yinyangImage from './yinyang.jpg'; // Adjust path as needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={yinyangImage} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
