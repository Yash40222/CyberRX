import React from 'react';
import './WhyCyberRx.css';

function WhyCyberRX() {
  return (
    <section className="why-section container d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div className="why-text">
        <h2 className="why-title">Why <span className="highlight">Cyber-RX</span>?</h2>
        <ul className="why-points">
          <li>
            <span className="icon">🛡️</span>
            <span>Built for public safety — shielding users from digital traps.</span>
          </li>
          <li>
            <span className="icon">⚙️</span>
            <span>Crafted for cybersecurity students & CTF warriors.</span>
          </li>
          <li>
            <span className="icon">💻</span>
            <span>Powerful tools, zero noise. Straight to the point.</span>
          </li>
          <li>
            <span className="icon">💡</span>
            <span>Learn while you detect — security simplified.</span>
          </li>
        </ul>
      </div>

      <div className="why-image">
        <img src="/pic1.png" alt="CyberRX Mission" />
      </div>
    </section>
  );
}

export default WhyCyberRX;
