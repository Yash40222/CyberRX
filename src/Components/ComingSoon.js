import React from 'react';
import './ComingSoon.css';

const ComingSoon = ({ title }) => {
  return (
    <div className="comingsoon-container">
      <img src="/logo.png" alt="Cyber-RX Logo" className="comingsoon-logo" />

      <h2 className="comingsoon-brand">Cyber-RX</h2>

      <h1 className="comingsoon-title">{title || "Coming Soon"}</h1>

      <p className="comingsoon-subtext">This feature is under construction. Stay tuned!</p>

      <p className="comingsoon-tagline">Something legendary is loading...</p>
    </div>
  );
};

export default ComingSoon;
