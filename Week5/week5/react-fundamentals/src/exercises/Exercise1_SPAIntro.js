import React, { useState } from "react";

/**
 * Exercise 1: Introduction to Single Page Application (SPA)
 * Objective: Define SPA and its benefits, demonstrate navigation
 * WITHOUT a full page reload (the core idea behind React apps).
 */
function Page({ title, children }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

export default function Exercise1_SPAIntro() {
  const [page, setPage] = useState("home");

  const pages = {
    home: (
      <Page title="Home">
        Welcome! Notice the URL/tab never reloads when you switch pages below.
        That is the essence of a Single Page Application.
      </Page>
    ),
    about: (
      <Page title="About SPA">
        A Single Page Application loads a single HTML page and dynamically
        updates content as the user interacts with it, instead of requesting
        entire new pages from the server.
      </Page>
    ),
    benefits: (
      <Page title="Benefits of SPA">
        Faster subsequent navigation, smoother user experience, reduced
        server load for rendering, and clear separation between front-end
        and back-end (via REST APIs).
      </Page>
    ),
  };

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 1: Single Page Application (SPA)</h3>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button className="primary" onClick={() => setPage("home")}>
          Home
        </button>
        <button className="primary" onClick={() => setPage("about")}>
          About
        </button>
        <button className="primary" onClick={() => setPage("benefits")}>
          Benefits
        </button>
      </div>
      {pages[page]}
    </div>
  );
}
