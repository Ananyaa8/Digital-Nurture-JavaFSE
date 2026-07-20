import React, { useEffect, useState } from "react";

/**
 * Exercise 15 (Additional): useEffect & Component Lifecycle (Hooks version)
 * Objective: Demonstrate the three effect phases — on mount, on update
 * (dependency change), and on unmount (cleanup) — the functional-component
 * equivalent of componentDidMount / componentDidUpdate / componentWillUnmount.
 */

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // cleanup — runs on unmount, mirrors componentWillUnmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // empty deps => run once on mount

  return <p>Current window width: <strong>{width}px</strong> (resize your browser window)</p>;
}

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // runs on mount AND every time `count` changes
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>Document title now shows the click count — check your browser tab.</p>
      <button className="primary" onClick={() => setCount(count + 1)}>
        Click me ({count})
      </button>
    </div>
  );
}

export default function Exercise15_UseEffectLifecycle() {
  const [showTracker, setShowTracker] = useState(true);

  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 15: useEffect &amp; Component Lifecycle</h3>

      <h4>Effect with cleanup (mount + unmount)</h4>
      <button className="primary" onClick={() => setShowTracker(!showTracker)}>
        {showTracker ? "Unmount" : "Mount"} WindowWidthTracker
      </button>
      {showTracker && <WindowWidthTracker />}

      <h4>Effect with a dependency (runs on update)</h4>
      <DocumentTitleUpdater />
    </div>
  );
}
