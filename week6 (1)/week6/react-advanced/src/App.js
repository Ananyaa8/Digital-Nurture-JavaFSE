import React, { useState } from "react";

import Exercise10_ListsKeys from "./exercises/Exercise10_ListsKeys";
import Exercise11_ControlledForms from "./exercises/Exercise11_ControlledForms";
import Exercise12_UncontrolledForms from "./exercises/Exercise12_UncontrolledForms";
import Exercise13_FetchAPI from "./exercises/Exercise13_FetchAPI";
import Exercise14_AxiosAPI from "./exercises/Exercise14_AxiosAPI";
import Exercise15_UseEffectLifecycle from "./exercises/Exercise15_UseEffectLifecycle";
import Exercise16_UseReducerContext from "./exercises/Exercise16_UseReducerContext";
import Exercise17_ErrorBoundaryDebugging from "./exercises/Exercise17_ErrorBoundaryDebugging";
import Exercise18_XHRAndJQuery from "./exercises/Exercise18_XHRAndJQuery";
import TypeScriptDebugDemo from "./exercises/TypeScriptDebugDemo";

const EXERCISES = [
  { id: "ex10", label: "Ex 10: Lists & Keys", mandatory: true, comp: Exercise10_ListsKeys },
  { id: "ex11", label: "Ex 11: Controlled Forms", mandatory: true, comp: Exercise11_ControlledForms },
  { id: "ex12", label: "Ex 12: Uncontrolled Forms", mandatory: true, comp: Exercise12_UncontrolledForms },
  { id: "ex13", label: "Ex 13: Calling API (Fetch)", mandatory: true, comp: Exercise13_FetchAPI },
  { id: "ex14", label: "Ex 14: Calling API (Axios) - extra", mandatory: false, comp: Exercise14_AxiosAPI },
  { id: "ex15", label: "Ex 15: useEffect Lifecycle - extra", mandatory: false, comp: Exercise15_UseEffectLifecycle },
  { id: "ex16", label: "Ex 16: useReducer + Context - extra", mandatory: false, comp: Exercise16_UseReducerContext },
  { id: "ex17", label: "Ex 17: Error Boundary & Debugging - extra", mandatory: false, comp: Exercise17_ErrorBoundaryDebugging },
  { id: "ex18", label: "Ex 18: jQuery & XHR - extra", mandatory: false, comp: Exercise18_XHRAndJQuery },
  { id: "ts-debug", label: "TS Debugging Demo (Module 10 bonus)", mandatory: false, comp: TypeScriptDebugDemo },
];

export default function App() {
  const [active, setActive] = useState("ex10");
  const activeExercise = EXERCISES.find((e) => e.id === active);
  const ActiveComponent = activeExercise.comp;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2>Week 6 - React Advanced &amp; Debugging</h2>
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
          ★ = Mandatory hands-on. See also DEBUGGING.md for Module 10
          (Application Debugging) exercises with Chrome DevTools & VS Code.
        </p>
      </aside>
      <main className="content">
        <ActiveComponent />
      </main>
    </div>
  );
}
