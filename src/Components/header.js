import React from "react";
import About from "./about";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#0a0f10", padding: "10px 20px" }}
    >
      <div className="container-fluid">
        {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="/">
  <img
    src="/logo.png"
    alt="Cyber-RX Logo"
    style={{
      height: "50px",
      objectFit: "contain",
      filter: "drop-shadow(0 0 2px red)",
      borderRadius: "50%",
      marginRight: "10px",
    }}
  />
  <span className="brand-name">Cyber-RX</span>
</a>
        {/* Hamburger Button */}
        <button
  className="custom-toggler d-md-none"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <div className="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Menu Items */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link texty px-3">Home</a>
            </li>
            <li className="nav-item">
              <a href="/features" className="nav-link texty px-3">Features</a>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="nav-link texty px-3">Pricing</a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link texty px-3">About</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex">
            <button type="button" className="log btn me-2">Login</button>
            <button type="button" className="sign btn">Sign-up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
