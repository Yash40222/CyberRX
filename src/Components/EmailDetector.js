import React, { useState } from "react";
import "./emailDetector.css";

const EmailDetector = () => {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(""); // Clear old result

    try {
      const response = await fetch("https://web-production-578a9.up.railway.app/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailText }),
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error: Could not analyze email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-detector-container">
      <h1 className="glow-heading">📧 Email Spam & Scam Detector</h1>

      <p className="description">
        Enter the full <strong>email content</strong> below — including subject,
        body, and headers if available. Our ML-powered engine analyzes it for
        phishing, scam wording, impersonation, shady links & more.
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
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      <p className="privacy-note">
        🔒 All content stays local. We do not store or share your email content.
      </p>

      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p className="analyzing-text">Analyzing email... Please wait.</p>
        </div>
      )}

      {result && !loading && (
        <div
          className={`result-box ${
            result.includes("Safe") ? "result-safe" : "result-spam"
          }`}
        >
          <h3>🔍 Analysis Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default EmailDetector;
