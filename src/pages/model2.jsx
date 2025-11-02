import React, { useState, useEffect } from "react";
import Cubes from "./Cubes";
import "./model2.css";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = () => {
    setLoading(true);
    setReportGenerated(false);

    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      setReportGenerated(true);
    }, 2000); // change delay if you want
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/report.pdf";
    link.download = "report.pdf";
    link.click();
  };

  // ✅ Control scrolling while cubes are showing
  useEffect(() => {
    if (!reportGenerated) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [reportGenerated]);

  return (
    <div className="home-container">

      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2 className="panel-title">Model 2 (with natural causes)</h2>

        <div className="input-box">
          <label>UPI / Transaction File</label>
          <input type="file" accept=".pdf,.xlsx,.csv" />
        </div>

        <div className="input-box">
          <label>Bank / Wallet Statements</label>
          <input type="file" accept=".pdf,.xlsx,.csv" />
        </div>

        <div className="input-box">
          <label>Additional Documents</label>
          <input type="file" multiple />
        </div>

        {/* Generate Button only if report not shown */}
        {!reportGenerated && (
          <button className="primary-btn" onClick={handleGenerateReport} disabled={loading}>
            {loading ? "Processing..." : "Generate Report"}
          </button>
        )}

        {/* Loading text BELOW button */}
        {loading && !reportGenerated && (
          <p style={{ color: "#6171ff", marginTop: "10px", fontSize: "14px" }}>
            Generating report...
          </p>
        )}

        {/* Download button only AFTER report */}
        {reportGenerated && (
          <button className="secondary-btn" onClick={handleDownload}>
            Download Report
          </button>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div style={{ height: "640px", width: "1000px", position: "relative" }}>
        
        {/* Show Cubes always until PDF */}
        {!reportGenerated ? (
          <div className="cubes-wrapper">
            <Cubes
              gridSize={18}
              cubeSize={30}
              maxAngle={60}
              radius={5}
              borderStyle="2px solid #6171ff"
              faceColor="#1a1a2e"
              rippleColor="#6171ff"
              rippleSpeed={1.5}
              autoAnimate={true}
              rippleOnClick={true}
            />
          </div>
        ) : (
          <div className="pdf-full">
            <embed
              src="/report.pdf"
              type="application/pdf"
            />
          </div>
        )}

      </div>
    </div>
  );
}
