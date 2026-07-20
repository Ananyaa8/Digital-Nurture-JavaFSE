import React, { useState } from "react";

/**
 * Exercise 8 (Additional): React Events
 * Objective: React (Synthetic) event object, event handlers,
 * passing arguments to event handlers.
 */
export default function Exercise8_EventsAdvanced() {
  const [log, setLog] = useState([]);

  const addLog = (msg) => setLog((prev) => [msg, ...prev].slice(0, 6));

  // Handler that receives the native/synthetic event object
  const handleMouseMove = (e) => {
    addLog(`Mouse moved to (${e.clientX}, ${e.clientY})`);
  };

  // Handler that receives a custom argument via an arrow function wrapper
  const handleItemClick = (itemName, e) => {
    e.stopPropagation();
    addLog(`Clicked item: ${itemName}`);
  };

  const handleKeyPress = (e) => {
    addLog(`Key pressed: "${e.key}"`);
  };

  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 8: React Events (Deep Dive)</h3>

      <div
        onMouseMove={handleMouseMove}
        style={{
          border: "1px dashed #aaa",
          padding: 16,
          marginBottom: 12,
          borderRadius: 8,
        }}
      >
        Move your mouse inside this box.
      </div>

      <div style={{ marginBottom: 12 }}>
        {["Apple", "Banana", "Cherry"].map((fruit) => (
          <button
            key={fruit}
            className="primary"
            style={{ marginRight: 8 }}
            onClick={(e) => handleItemClick(fruit, e)}
          >
            {fruit}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type here to see key events..."
        onKeyDown={handleKeyPress}
      />

      <h4>Event Log (most recent first)</h4>
      <ul>
        {log.map((entry, idx) => (
          <li key={idx} style={{ fontSize: 13 }}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
