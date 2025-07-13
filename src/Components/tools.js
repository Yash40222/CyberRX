import React from "react";
import "./tools.css";


function ToolsShowcase() {
  const tools = [
    {
      title: "Email Spam & Scam Detector",
      desc: "Scan emails for phishing, spam, and scam patterns.",
      icon: "📧",
      link: "/EmailDetector",
      finished: true,
    },
    {
      title: "Website Trust Score",
      desc: "Analyze site reputation and SSL/WHOIS for safety score.",
      icon: "✅",
      link: "/TrustScoreChecker",
      finished: true,
    },
    {
      title: "Phishing URL Analyzer",
      desc: "Check if a URL is malicious or trying to phish you.",
      icon: "🔗",
      link: "/phishing-url",
      finished: false,
    },
    {
      title: "Data Leak Checker",
      desc: "Find out if your email or credentials are leaked online.",
      icon: "🕵️",
      link: "/data-leak",
      finished: false,
    },
    {
      title: "Fake Login Page Detector",
      desc: "Upload a screenshot and detect fake login pages.",
      icon: "🛡️",
      link: "/fake-login",
      finished: false,
    },
  ];

  return (
    <section className="tools-section">
      <h2 className="tools-title">Explore Our Free Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="tool-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="tool-icon">{tool.icon}</div>
            <h3>{tool.title}</h3>
            <p>{tool.desc}</p>

            {tool.finished ? (
              <a href={tool.link} className="try-btn">
                Try Now
              </a>
            ) : (
              <div className="locked-overlay">
                <img src="./logo-brand.ico" alt="Cyber-RX Logo" className="shield-icon" />
                <p className="locked-text">Under Development</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolsShowcase;
