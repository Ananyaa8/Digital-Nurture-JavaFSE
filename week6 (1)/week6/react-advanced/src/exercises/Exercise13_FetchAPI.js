import React, { useEffect, useState } from "react";

/**
 * Exercise 13: Calling API with React (Fetch API)
 * Objective: How React clients interact with a database / REST API using
 * the native Fetch API. Uses the public JSONPlaceholder test API.
 */
const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Exercise13_FetchAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelled) {
          setUsers(data.slice(0, 5));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 13: Calling an API with the Fetch API</h3>
      <p style={{ fontSize: 13, color: "#555" }}>
        GET <code>{API_URL}</code> using native <code>fetch()</code>.
      </p>

      {loading && <p>Loading users…</p>}
      {error && <p className="error-text">Error: {error}</p>}

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email} ({u.company?.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
