import React, { useState } from "react";

import Exercise1_SPAIntro from "./exercises/Exercise1_SPAIntro";
import Exercise2_ReactIntro from "./exercises/Exercise2_ReactIntro";
import Exercise3_ComponentsProps from "./exercises/Exercise3_ComponentsProps";
import Exercise4_ES6JSX from "./exercises/Exercise4_ES6JSX";
import Exercise5_StateProps from "./exercises/Exercise5_StateProps";
import Exercise6_ClassComponent from "./exercises/Exercise6_ClassComponent";
import Exercise7_JSXStyling from "./exercises/Exercise7_JSXStyling";
import Exercise8_EventsAdvanced from "./exercises/Exercise8_EventsAdvanced";
import Exercise9_ConditionalRendering from "./exercises/Exercise9_ConditionalRendering";

const EXERCISES = [
  { id: "ex1", label: "Ex 1: SPA Intro", mandatory: true, comp: Exercise1_SPAIntro },
  { id: "ex2", label: "Ex 2: React Intro & Virtual DOM", mandatory: true, comp: Exercise2_ReactIntro },
  { id: "ex3", label: "Ex 3: Components & Props", mandatory: true, comp: Exercise3_ComponentsProps },
  { id: "ex4", label: "Ex 4: ES6 & JSX", mandatory: true, comp: Exercise4_ES6JSX },
  { id: "ex5", label: "Ex 5: State & Props (Counter)", mandatory: true, comp: Exercise5_StateProps },
  { id: "ex6", label: "Ex 6: Class Components (extra)", mandatory: false, comp: Exercise6_ClassComponent },
  { id: "ex7", label: "Ex 7: JSX Styling (extra)", mandatory: false, comp: Exercise7_JSXStyling },
  { id: "ex8", label: "Ex 8: Events Deep-dive (extra)", mandatory: false, comp: Exercise8_EventsAdvanced },
  { id: "ex9", label: "Ex 9: Conditional Rendering", mandatory: true, comp: Exercise9_ConditionalRendering },
];

export default function App() {
  const [active, setActive] = useState("ex1");
  const activeExercise = EXERCISES.find((e) => e.id === active);
  const ActiveComponent = activeExercise.comp;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2>Week 5 - React Fundamentals</h2>
        {EXERCISES.map((ex) => (
          <button
            key={ex.id}
            className={ex.id === active ? "active" : ""}
            onClick={() => setActive(ex.id)}
          >
            {ex.label} {ex.mandatory ? "★" : ""}
          </button>
        ))}
        <p style={{ fontSize: 11, color: "#8891c9", marginTop: 20 }}>
          ★ = Mandatory hands-on
        </p>
      </aside>
      <main className="content">
        <ActiveComponent />
      </main>
    </div>
  );
}
