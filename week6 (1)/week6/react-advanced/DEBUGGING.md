# Module 10 — Application Debugging Hands-On (Week 6)

This module is practiced **on top of the React app in this folder**
(`react-advanced`), especially `Exercise17_ErrorBoundaryDebugging.js`, which
was written specifically to give you something realistic to debug.

Run the app first:

```bash
cd week6/react-advanced
npm install
npm start
```

Then open `http://localhost:3000` and select **Ex 17: Error Boundary &
Debugging** from the sidebar.

---

## Hands-on 1: Debugging React with Chrome DevTools

1. Open Chrome and navigate to the running app.
2. Right-click anywhere → **Inspect** (or press `F12` / `Ctrl+Shift+I`) to
   open DevTools.
3. Go to the **Elements** tab and expand the DOM tree — locate the `<div id="root">`
   and see how React has rendered the sidebar and the exercise cards into it.
4. Install the **React Developer Tools** browser extension if you haven't
   already, then open the new **Components** tab in DevTools. Select the
   `Exercise17_ErrorBoundaryDebugging` component and watch the `triggerBug`
   state value flip as you click the button in the app.
5. Go to the **Sources** tab. Under `webpack://` (or the equivalent virtual
   file tree), locate `src/exercises/Exercise17_ErrorBoundaryDebugging.js`.
6. Click the line number for:
   ```js
   return <p>Price: ₹{price.toFixed(2)}</p>;
   ```
   inside `BuggyPriceTag` to set a **breakpoint**.
7. Back in the app, click **"Trigger the bug"**. Execution pauses at your
   breakpoint.
8. In the right-hand panel, expand **Scope → price** — you'll see
   `price: undefined`, which is exactly why `.toFixed()` throws.
9. Use **Step Over (F10)** to execute the failing line and watch the
   exception get thrown and caught by the `ErrorBoundary`.
10. Remove the breakpoint (click the line number again) and click
    **"Reset"** in the app to restore normal state.

## Hands-on 2: Debugging with Visual Studio Code

1. Open the `week6/react-advanced` folder in VS Code.
2. Install the built-in **JavaScript Debugger** (bundled with VS Code) —
   no extra extension is required for Chrome debugging.
3. Create `.vscode/launch.json` (see below) so VS Code can attach to Chrome.
4. Set a breakpoint by clicking in the gutter next to the same line in
   `Exercise17_ErrorBoundaryDebugging.js` as above.
5. Start the dev server (`npm start`) in one terminal.
6. Press `F5` in VS Code (or Run → Start Debugging) to launch Chrome
   attached to the debugger.
7. Trigger the bug in the browser — VS Code will pause execution directly
   in the editor, showing the **Variables**, **Watch**, and **Call Stack**
   panels.
8. Use the debug toolbar to **Step Into**, **Step Over**, **Step Out**, and
   **Continue**, and hover over `price` in the editor to inspect its value
   inline.

### `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Debug React App in Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

## Hands-on 3: Inspecting elements & application state

1. In Chrome DevTools → **Elements**, hover over any list item rendered by
   `Exercise10_ListsKeys.js` and confirm it highlights the correct DOM node.
2. In the **Components** tab (React DevTools), select the `App` component
   and inspect its `active` state as you click through the sidebar — this
   demonstrates examining application state live, per the module's learning
   objectives.

## Hands-on 4: Debugging TypeScript files

Every other exercise in this project is plain JS/JSX. The handbook's Module
10 objectives specifically call out debugging **TypeScript** files, so this
project includes one real `.tsx` file for that purpose:
`src/exercises/TypeScriptDebugDemo.tsx`. Select **"TS Debugging Demo (Module
10 bonus)"** in the sidebar to open it.

1. In Chrome DevTools → **Sources**, find `TypeScriptDebugDemo.tsx` under the
   webpack source tree (source maps let DevTools show you the original
   `.tsx`, not the compiled JS — the same principle as source maps for
   regular JS).
2. Set a breakpoint inside `calculateDiscount`, on the line:
   ```ts
   const discounted = price - (price * discountPercent) / 100;
   ```
3. In the running app, type `120` into the "Discount %" field (already the
   default) and confirm the "Buggy" result shows a **negative discounted
   price** — TypeScript's type system doesn't catch this because
   `discountPercent: number` is technically satisfied; the bug is a business
   rule violation, not a type error.
4. With the breakpoint hit, open the **Watch** panel and add
   `discountPercent` and `discounted` as watch expressions to see their live
   values.
5. Compare against `calculateDiscountFixed`, which clamps the percentage to
   `0–100` before using it — set a second breakpoint inside `clamp(...)` to
   see `safePercent` corrected in real time.
6. Repeat the same breakpoint/watch exercise in **VS Code** using the
   `launch.json` from Hands-on 2 — VS Code's debugger understands `.tsx`
   source maps exactly the same way Chrome does, so no extra configuration
   is required.

## Self-check against Module 10 learning objectives

- [x] Debug React applications using Chrome DevTools, including DOM inspection and breakpoints
- [x] Analyze JavaScript code using the Sources panel and source maps
- [x] Inspect elements and understand application structure through the DOM tree
- [x] Configure and use the Visual Studio Code debugger with a React application
- [x] Set breakpoints, watch variables, and inspect state during debugging
- [x] Apply effective debugging techniques to identify and fix a real frontend issue (see `BuggyPriceTag` → `FixedPriceTag`)
- [x] Improve application reliability using an Error Boundary
