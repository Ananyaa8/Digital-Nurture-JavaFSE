import React, { useState } from "react";

/**
 * Exercise 2: Introduction to React & the Virtual DOM
 * Objective: "Hello World" in React, and demonstrate that React only
 * re-renders/updates the part of the real DOM that changed (Virtual DOM diffing).
 */
export default function Exercise2_ReactIntro() {
  const [count, setCount] = useState(0);
  const [renderTime] = useState(new Date().toLocaleTimeString());

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 2: Hello World & Virtual DOM</h3>
      <p>Hello, World! This is my first React component. 🎉</p>

      <p>
        Component first mounted at: <strong>{renderTime}</strong> (this value
        never changes, proving the component itself is not fully re-created
        on every click below)
      </p>

      <p>Button clicked: <strong>{count}</strong> times</p>
      <button className="primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p style={{ marginTop: 12, fontSize: 13, color: "#555" }}>
        Behind the scenes: React builds a lightweight in-memory representation
        of the UI (the Virtual DOM). When state changes, React compares
        ("diffs") the new Virtual DOM with the previous one and updates only
        the changed nodes in the real DOM — here, just the number above —
        instead of re-rendering the whole page.
      </p>
    </div>
  );
}
