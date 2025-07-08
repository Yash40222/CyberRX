import React from "react";
import './about.css'; // Make sure the path is correct

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Cyber-RX</h2>

        <p className="about-paragraph">
          <strong>Cyber-RX</strong> isn’t just a toolkit — it’s a mindset. Built in the dark to defend the light,
          this platform was born from a student’s vision to protect people from digital deception.
          We believe security should be simple, powerful, and accessible to all.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h3>Our Mission</h3>
            <ul>
              <li>🛡️ Empower users to detect and defend against threats.</li>
              <li>🔍 Educate with hands-on, real-world tools.</li>
              <li>⚔️ Equip students and pros with practical utilities.</li>
            </ul>
          </div>

          <div className="about-block">
            <h3>Why It Matters</h3>
            <p>
              Phishing, leaks, fake login pages — threats are everywhere. Cyber-RX flips the script —
              putting power back in the user’s hands with protective and educational tools.
            </p>
          </div>

          <div className="about-block">
            <h3>Who's Behind Cyber-RX?</h3>
            <p>
              👨‍💻 A solo dev named <span className="about-highlight">Yashdeep Chaurasia</span>, fueled by coffee and curiosity.
              Cyber-RX proves that conviction + code beats any budget.
            </p>
          </div>

          <div className="about-block">
            <h3>The Road Ahead</h3>
            <p>
              This is just the beginning. More tools, community features, and premium utilities are coming.
              Cyber-RX will evolve into a full-blown digital fortress.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <p>Whether you're a student, ethical hacker, or just tired of scams — Cyber-RX is for you.</p>
          <a href="/features">Explore Our Tools</a>
        </div>
      </div>
    </section>
  );
};

export default About;
