import React from "react";
import './hero.css';

function Hero() {
  return (
    <>
      <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="hero-text">
        <h1 className="typewriter-heading">
  <span className="static-text">Welcome to </span>
  <span className="typewriter-text">Cyber-RX</span>
</h1>

          <p>Shield your digital life. From phishing detection to recon tools — we've got you covered.</p>
          <a href="/features" className="btn explore-btn">Explore Tools</a>
        </div>
        <div className="hero-img">
          <img src="./shield.png" alt="Cyber Shield" />
        </div>
      </section>
    </>
  );
}

export default Hero;
