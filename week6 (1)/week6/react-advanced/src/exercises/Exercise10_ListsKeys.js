import React, { useState } from "react";

/**
 * Exercise 10: React List and Keys
 * Objective: Displaying a list on the UI with map(), the importance of the
 * "key" prop, and extracting a list item into its own component.
 */

function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #eee",
        textDecoration: task.done ? "line-through" : "none",
        color: task.done ? "#999" : "#1c1c28",
      }}
    >
      <span onClick={() => onToggle(task.id)} style={{ cursor: "pointer" }}>
        {task.text}
      </span>
      <button onClick={() => onRemove(task.id)} style={{ color: "#c0392b", border: "none", background: "transparent", cursor: "pointer" }}>
        ✕
      </button>
    </li>
  );
}

let nextId = 4;

export default function Exercise10_ListsKeys() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete Spring REST module", done: true },
    { id: 2, text: "Practice PL/SQL exercises", done: false },
    { id: 3, text: "Finish React hands-on", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: nextId++, text: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 10: Lists &amp; Keys (To-Do List)</h3>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          // "key" must be a stable, unique identifier (task.id) — NOT the
          // array index — so React can correctly track each list item
          // across re-renders.
          <TaskItem key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks left. 🎉</p>}
    </div>
  );
}
