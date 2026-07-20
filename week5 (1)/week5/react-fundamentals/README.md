# Week 5 — React Fundamentals (Module 9: Single Page Application Framework - React)

DN 5.0 Deep Skilling — Java FSE React | Cognizant

This project covers the **Module 9 – React** self-learning topics from the
Deep Skilling Handbook: SPA basics, React intro & Virtual DOM, components &
props, ES6 & JSX, state, events, JSX styling and conditional rendering.

## Exercises included

| # | Exercise | Type |
|---|----------|------|
| 1 | Single Page Application (SPA) intro | Mandatory |
| 2 | React Intro & Virtual DOM ("Hello World") | Mandatory |
| 3 | Components & Props (functional + class) | Mandatory |
| 4 | ES6 features & JSX (classes, inheritance, arrow fns, nested JSX) | Mandatory |
| 5 | State & Props (Counter app) | Mandatory |
| 6 | Class Component & Lifecycle (constructor, mount/unmount) | Additional |
| 7 | JSX Styling (className + inline styles) | Additional |
| 8 | React Events deep-dive (event object, passing args) | Additional |
| 9 | Conditional Rendering (element var, &&, ternary, return null) | Mandatory |

Each exercise is a self-contained component under `src/exercises/`. Use the
left navigation sidebar in the running app to switch between them.

## How to run

```bash
cd week5/react-fundamentals
npm install
npm start
```

The app opens at `http://localhost:3000`.

## How to build for submission

```bash
npm run build
```

This produces a production build in the `build/` folder that can be zipped
and uploaded alongside the source, if required.

## Folder structure

```
react-fundamentals/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    └── exercises/
        ├── Exercise1_SPAIntro.js
        ├── Exercise2_ReactIntro.js
        ├── Exercise3_ComponentsProps.js
        ├── Exercise4_ES6JSX.js
        ├── Exercise5_StateProps.js
        ├── Exercise6_ClassComponent.js
        ├── Exercise7_JSXStyling.js
        ├── Exercise7_JSXStyling.css
        ├── Exercise8_EventsAdvanced.js
        └── Exercise9_ConditionalRendering.js
```

## Submitting to GitHub (per handbook instructions)

1. Create a public repository in your personal GitHub account.
2. Copy the `week5` folder into your solutions repo (keep it week-wise).
3. Commit & push.
4. Share the repository URL with your POC on demand.
