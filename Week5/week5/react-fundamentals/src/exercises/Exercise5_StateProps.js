import React, { useState } from "react";

/**
 * Exercise 5: State and Props
 * Objective: Demonstrate component-local state (useState) vs data received
 * via props, using a classic counter app with a configurable step (prop).
 */

function Counter({ step }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: 16 }}>
      <p>
        Step size (prop): <strong>{step}</strong> | Current count (state):{" "}
        <strong>{count}</strong>
      </p>
      <button className="primary" onClick={() => setCount(count + step)}>
        + Increment
      </button>{" "}
      <button className="primary" onClick={() => setCount(count - step)}>
        - Decrement
      </button>{" "}
      <button className="primary" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default function Exercise5_StateProps() {
  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 5: State & Props (Counter App)</h3>
      <h4>Counter A (step = 1, passed as prop)</h4>
      <Counter step={1} />
      <h4>Counter B (step = 5, passed as prop)</h4>
      <Counter step={5} />
      <p style={{ fontSize: 13, color: "#555" }}>
        Each <code>&lt;Counter/&gt;</code> instance keeps its own independent
        state, while the <code>step</code> value is passed in from the parent
        as a prop — illustrating the difference between state (internal,
        mutable) and props (external, read-only from the child's
        perspective).
      </p>
    </div>
  );
}
