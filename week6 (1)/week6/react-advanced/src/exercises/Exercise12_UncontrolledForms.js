import React, { useRef, useState } from "react";

/**
 * Exercise 12: React Forms - Uncontrolled Inputs
 * Objective: Uncontrolled inputs using refs, textarea tag, select tag.
 */
export default function Exercise12_UncontrolledForms() {
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const roleRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult({
      name: nameRef.current.value,
      bio: bioRef.current.value,
      role: roleRef.current.value,
    });
  };

  const handleReset = () => {
    nameRef.current.value = "";
    bioRef.current.value = "";
    roleRef.current.value = "Java Developer";
    setResult(null);
  };

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 12: Uncontrolled Forms (useRef)</h3>
      <p style={{ fontSize: 13, color: "#555" }}>
        Unlike Exercise 11, these inputs are NOT tied to React state on every
        keystroke. Instead we read their current value directly from the DOM
        via <code>ref</code> only when the form is submitted.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" ref={nameRef} defaultValue="" placeholder="Your name" />

        <label>Bio</label>
        <textarea ref={bioRef} rows={3} placeholder="Tell us about yourself..." />

        <label>Preferred Role</label>
        <select ref={roleRef} defaultValue="Java Developer">
          <option>Java Developer</option>
          <option>React Developer</option>
          <option>Full Stack Engineer</option>
          <option>DevOps Engineer</option>
        </select>

        <div style={{ display: "flex", gap: 8 }}>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div style={{ marginTop: 16, background: "#eef0ff", padding: 12, borderRadius: 8 }}>
          <strong>{result.name}</strong> ({result.role})
          <p style={{ margin: "6px 0 0" }}>{result.bio}</p>
        </div>
      )}
    </div>
  );
}
