import React, { useState } from "react";
import "./Exercise7_JSXStyling.css";

/**
 * Exercise 7 (Additional): JSX Styling
 * Objective: className usage (external CSS), inline style objects,
 * and conditional class names.
 */
export default function Exercise7_JSXStyling() {
  const [active, setActive] = useState(false);

  const inlineStyle = {
    padding: "10px 14px",
    borderRadius: 8,
    background: active ? "#4c5bff" : "#eef0ff",
    color: active ? "#fff" : "#4c5bff",
    transition: "all 0.2s ease-in-out",
    display: "inline-block",
    cursor: "pointer",
  };

  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 7: JSX Styling</h3>

      <h4>External CSS via className</h4>
      <p className="highlight-box">
        This paragraph is styled using a class defined in{" "}
        <code>Exercise7_JSXStyling.css</code>.
      </p>

      <h4>Inline style objects (state-driven)</h4>
      <div style={inlineStyle} onClick={() => setActive(!active)}>
        Click to toggle style ({active ? "active" : "inactive"})
      </div>

      <h4>Conditional className</h4>
      <p className={active ? "status active" : "status inactive"}>
        Status: {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}
