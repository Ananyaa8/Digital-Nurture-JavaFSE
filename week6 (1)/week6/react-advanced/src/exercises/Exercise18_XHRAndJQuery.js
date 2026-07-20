import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";

/**
 * Exercise 18 (Additional): Calling an API with jQuery and XMLHttpRequest
 * Objective: The handbook's "Calling API with React" topic lists FOUR ways
 * of talking to an API — Fetch, Axios, jQuery, and XMLHttpRequest. Exercises
 * 13 & 14 covered Fetch and Axios (the two the handbook says to actually
 * implement); this exercise covers the remaining two so all four are
 * demonstrated side by side.
 */
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function XHRDemo() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("idle");

  const loadWithXHR = () => {
    setStatus("loading");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${TODOS_URL}?_limit=5`, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          setTodos(JSON.parse(xhr.responseText));
          setStatus("done");
        } else {
          setStatus(`error (${xhr.status})`);
        }
      }
    };
    xhr.onerror = () => setStatus("network error");
    xhr.send();
  };

  return (
    <div>
      <h4>Raw XMLHttpRequest</h4>
      <button className="primary" onClick={loadWithXHR}>
        Load todos with XHR
      </button>
      <p>Status: {status}</p>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.completed ? "✅" : "⬜"} {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JQueryDemo() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle");
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const loadWithJQuery = () => {
    setStatus("loading");
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      data: { _limit: 5 },
      dataType: "json",
    })
      .done((data) => {
        if (mounted.current) {
          setUsers(data);
          setStatus("done");
        }
      })
      .fail((jqXHR, textStatus) => {
        if (mounted.current) setStatus(`error: ${textStatus}`);
      });
  };

  return (
    <div>
      <h4>jQuery $.ajax()</h4>
      <button className="primary" onClick={loadWithJQuery}>
        Load users with jQuery
      </button>
      <p>Status: {status}</p>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Exercise18_XHRAndJQuery() {
  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 18: Calling APIs with jQuery &amp; XMLHttpRequest</h3>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 16 }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
            <th style={{ padding: 6 }}>Approach</th>
            <th style={{ padding: 6 }}>Style</th>
            <th style={{ padding: 6 }}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: 6 }}>Fetch API (Ex 13)</td>
            <td style={{ padding: 6 }}>Promise-based, native</td>
            <td style={{ padding: 6 }}>Built into the browser, no library needed; you must manually check <code>response.ok</code>.</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: 6 }}>Axios (Ex 14)</td>
            <td style={{ padding: 6 }}>Promise-based, library</td>
            <td style={{ padding: 6 }}>Auto JSON parsing, request/response interceptors, throws on non-2xx by default.</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: 6 }}>jQuery $.ajax()</td>
            <td style={{ padding: 6 }}>Callback-based</td>
            <td style={{ padding: 6 }}>Common in legacy codebases; rarely needed in modern React apps but useful to recognize.</td>
          </tr>
          <tr>
            <td style={{ padding: 6 }}>XMLHttpRequest</td>
            <td style={{ padding: 6 }}>Event-based, native</td>
            <td style={{ padding: 6 }}>The lowest-level browser API — what Fetch/Axios/jQuery all use under the hood.</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <XHRDemo />
        </div>
        <div style={{ flex: 1 }}>
          <JQueryDemo />
        </div>
      </div>
    </div>
  );
}
