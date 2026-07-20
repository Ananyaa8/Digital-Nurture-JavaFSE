import React, { useState } from "react";

/**
 * Exercise 17 (Additional): Error Boundary & Application Debugging
 * Objective (Module 10): identify, analyze and resolve frontend issues.
 * This component intentionally contains a bug that is caught by an Error
 * Boundary, and a "fixed" version, so both behaviours can be compared while
 * practicing with React DevTools / Chrome DevTools breakpoints.
 */

// A class component MUST be used to implement an Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In real debugging you'd inspect this in the console / Sources panel
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: "#fdecea", color: "#c0392b", padding: 12, borderRadius: 8 }}>
          ⚠ Something went wrong: {this.state.error.message}
          <br />
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// BUGGY: tries to read .toFixed() on `price` even if undefined -> throws
function BuggyPriceTag({ price }) {
  return <p>Price: ₹{price.toFixed(2)}</p>;
}

// FIXED: defensive check added after debugging with breakpoints
function FixedPriceTag({ price }) {
  if (typeof price !== "number") {
    return <p>Price: N/A</p>;
  }
  return <p>Price: ₹{price.toFixed(2)}</p>;
}

export default function Exercise17_ErrorBoundaryDebugging() {
  const [triggerBug, setTriggerBug] = useState(false);

  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 17: Error Boundary &amp; Debugging</h3>

      <p style={{ fontSize: 13, color: "#555" }}>
        Click the button below to render <code>BuggyPriceTag</code> with an{" "}
        <code>undefined</code> price. It throws, and the{" "}
        <code>ErrorBoundary</code> catches it instead of crashing the whole
        app. This mirrors the Module 10 workflow: reproduce → set a
        breakpoint in the Sources panel on the line that throws → inspect the
        call stack/variables → patch the code (see{" "}
        <code>FixedPriceTag</code> below) → verify the fix.
      </p>

      <button className="primary" onClick={() => setTriggerBug(!triggerBug)}>
        {triggerBug ? "Reset" : "Trigger the bug"}
      </button>

      <div style={{ marginTop: 12 }}>
        <h4>Buggy version (wrapped in Error Boundary)</h4>
        <ErrorBoundary>
          {triggerBug ? <BuggyPriceTag price={undefined} /> : <BuggyPriceTag price={499} />}
        </ErrorBoundary>

        <h4>Fixed version</h4>
        <FixedPriceTag price={undefined} />
        <FixedPriceTag price={499} />
      </div>
    </div>
  );
}
