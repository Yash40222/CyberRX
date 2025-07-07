import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-logo">
          <img className="amee" src="/logo.png" alt="Cyber-RX Logo" />
          <h3>Cyber-RX</h3>
          <p className="slogan">Precision tools. Hacker-proof shields.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Discord</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cyber-RX. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
