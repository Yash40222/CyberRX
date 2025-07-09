import React, { useState } from "react";
import "./emailDetector.css";

const EmailDetector = () => {
  const [emailText, setEmailText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email content:", emailText);
    // You can send this to your ML backend here
  };

  return (
    <div className="email-detector-container">
      <h1 className="glow-heading">📧 Email Spam & Scam Detector</h1>

      <p className="description">
        Enter the full **email content** below — including subject, body, and headers if available. Our ML-powered engine analyzes it for patterns like phishing links, scam wording, impersonation tactics, and more.
        <br />
        🧠 Built with 91% accuracy using real-world phishing datasets. Fast, free, and designed to protect.
      </p>


      <form className="email-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste email content here..."
          className="email-textarea"
          rows="12"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Analyze</button>
      </form>
      <p className="privacy-note">
  🔒 All content stays local. We do not store or share your email content.
</p>
    </div>
  );
};

export default EmailDetector;
