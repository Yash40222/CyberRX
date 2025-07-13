import React, { useState } from "react";
import "./TrustScoreChecker.css";

export default function TrustScoreChecker() {
  const [url, setUrl] = useState("");
  const [score, setScore] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setScore(null);
    setDetails(null);
    setDetailsVisible(false);

    try {
      const response = await fetch("https://web-production-f594c.up.railway.app/api/check-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown server error");
      }

      const data = await response.json();

      setScore(data.final_score);
      setDetails({
        vt: data.vt_result,
        ssl: data.ssl_result,
        whois: data.whois_result,
      });

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatus = () => {
    if (score < 50) return "🚩 Suspicious Website — Proceed With Extreme Caution!";
    if (score < 70) return "⚠️ Probably Safe — But Stay Alert.";
    return "✅ Safe — Trustworthy & Secure.";
  };

  const getColorClass = () => {
    if (score < 50) return "danger";
    if (score < 70) return "warning";
    return "safe";
  };

  return (
    <main className="trust-score-container">
      <h1 className="main-title">🔍 Website Trust Score</h1>
      <p className="subtitle">Scan. Verify. Outsmart threats before they bite.</p>

      <div className="url-form-container">
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="text"
            placeholder="Enter full URL here…"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                Scanning... <span className="loader"></span>
              </>
            ) : (
              "Scan"
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="error-box">
          ❌ {error}
        </div>
      )}

      <div className="features-list">
        <p>✔️ SSL Verification</p>
        <p>🌐 Domain Reputation</p>
        <p>🕵️ WHOIS Data</p>
        <p>⚡ Real-time Threat Check</p>
      </div>

      {score !== null && (
        <div className={`result-card ${getColorClass()}`}>
          <h2 className="score">{score}/100</h2>
          <p className="status">{getStatus()}</p>

          <button
            onClick={() => setDetailsVisible(!detailsVisible)}
            className="details-btn"
          >
            {detailsVisible ? "Hide Technical Details" : "Show Technical Details"}
          </button>

          {detailsVisible && (
            <pre className="details-box">
              {JSON.stringify(details, null, 2)}
            </pre>
          )}

          <p className="next-step">
            {score < 50
              ? "🔒 Consider blocking this site in your security tools or router."
              : score < 70
              ? "🔍 Stay cautious. Don't trust shady emails blindly."
              : "🎉 No obvious red flags. Still, always double-check before sharing sensitive data."}
          </p>
        </div>
      )}

      
    </main>
  );
}
