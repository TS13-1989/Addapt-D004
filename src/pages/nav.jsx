import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css"; // Create this for styling

export default function NavigationPage() {
  const navigate = useNavigate();

  return (
    <div className="a">
      <h1 className="b">Navigation</h1>

      <div className="c">
        <button className="d" onClick={() => navigate("/model1")}>
          Model 1
        </button>

        <button className="d" onClick={() => navigate("/model2")}>
          Model 2
        </button>

        <button className="d" onClick={() => navigate("/credits")}>
          Credits
        </button>
      </div>
    </div>
  );
}
