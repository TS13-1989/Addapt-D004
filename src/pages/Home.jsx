import React from "react";
import Beams from "./Beams"; 
import "./home.css";

const HomePage = () => {
  return (
    <div className="homepage" style={{ position: "relative" }}>
      {/* Full-page Beams background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={50}
          beamNumber={20}
          lightColor="#7b5eee"
          speed={2.5}
          noiseIntensity={0}
          scale={0.3}
          rotation={30}
        />
      </div>

      {/* Navbar */}
      <nav className="navbar" style={{ position: "relative", zIndex: 1 }}>
        <div className="nav-left">
          {/* Logo removed */}
          <h2 className="nav-title">DataVault</h2>
        </div>
        <div className="nav-right">
          <button className="nav-btn" onClick={() => window.location.href = "/Login"}>Login</button>
          <button className="nav-btn" onClick={() => window.location.href = "/Register"}>Register</button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-content" style={{ position: "relative", zIndex: 1,backgroundColor: 'rgba(255, 255, 255, 0)', padding: '40px', borderRadius: '15px' }}>

        <div className="right-panel" style={{ position: "relative", zIndex: 1,backgroundColor: 'rgba(255, 255, 255, 0)', padding: '40px', borderRadius: '15px' }}>
          <h1 className="site-title">DataVault</h1>
          <p className="site-description">
            A banking service
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
