import React, { useState } from "react";

/**
 * Exercise 9: Conditional Rendering
 * Objective: Element variables, inline if with &&, inline if-else with the
 * ternary operator, and preventing a component from rendering (return null).
 */

function WarningBanner({ warn }) {
  // Prevent component from rendering
  if (!warn) {
    return null;
  }
  return (
    <div style={{ background: "#fdecea", color: "#c0392b", padding: 10, borderRadius: 6 }}>
      ⚠ Warning! Something needs your attention.
    </div>
  );
}

export default function Exercise9_ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState(3);
  const [showWarning, setShowWarning] = useState(true);

  // Element variable
  let greeting;
  if (isLoggedIn) {
    greeting = <p>Welcome back, Champ! 👋</p>;
  } else {
    greeting = <p>Please sign in to continue.</p>;
  }

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 9: Conditional Rendering</h3>

      <h4>1. Element Variable</h4>
      {greeting}
      <button className="primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State
      </button>

      <h4>2. Inline if with &amp;&amp;</h4>
      <p>
        You have {messages} unread messages.
        {messages > 0 && <strong> You have new messages!</strong>}
      </p>
      <button className="primary" onClick={() => setMessages(Math.max(0, messages - 1))}>
        Mark one as read
      </button>

      <h4>3. Inline if-else with the ternary operator</h4>
      <p>{messages > 0 ? "📬 Inbox is not empty" : "📭 Inbox is empty"}</p>

      <h4>4. Preventing a Component from Rendering</h4>
      <button className="primary" onClick={() => setShowWarning(!showWarning)}>
        Toggle Warning Banner
      </button>
      <div style={{ marginTop: 10 }}>
        <WarningBanner warn={showWarning} />
      </div>
    </div>
  );
}
