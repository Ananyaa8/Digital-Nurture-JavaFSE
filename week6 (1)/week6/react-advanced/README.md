# Week 6 — React Advanced (Lists/Forms/API) + Application Debugging

DN 5.0 Deep Skilling — Java FSE React | Cognizant

Covers the remaining **Module 9 – React** topics (lists & keys, forms,
calling APIs) plus **Module 10 – Application Debugging**.

## Exercises included

| # | Exercise | Type |
|---|----------|------|
| 10 | Lists & Keys (To-Do list) | Mandatory |
| 11 | Controlled Forms + validation | Mandatory |
| 12 | Uncontrolled Forms (useRef, textarea, select) | Mandatory |
| 13 | Calling API with Fetch (JSONPlaceholder) | Mandatory |
| 14 | Calling API with Axios (GET + POST) | Additional |
| 15 | useEffect & Component Lifecycle | Additional |
| 16 | useReducer + Context API (shopping cart) | Additional |
| 17 | Error Boundary & Debugging walk-through | Additional |
| 18 | Calling APIs with jQuery `$.ajax()` and raw `XMLHttpRequest` | Additional |
| — | TypeScript Debugging Demo (`.tsx`) — Module 10 bonus, see DEBUGGING.md | Bonus |

See **[DEBUGGING.md](./DEBUGGING.md)** for the full Module 10 (Application
Debugging) hands-on steps using Chrome DevTools and VS Code, built around
Exercise 17.

## How to run

```bash
cd week6/react-advanced
npm install
npm start
```

The app opens at `http://localhost:3000`. Exercises 13/14 call the free,
public **JSONPlaceholder** test API (`https://jsonplaceholder.typicode.com`),
so an internet connection is required for those two screens only.

## How to build for submission

```bash
npm run build
```

## Folder structure

```
react-advanced/
├── DEBUGGING.md
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    └── exercises/
        ├── Exercise10_ListsKeys.js
        ├── Exercise11_ControlledForms.js
        ├── Exercise12_UncontrolledForms.js
        ├── Exercise13_FetchAPI.js
        ├── Exercise14_AxiosAPI.js
        ├── Exercise15_UseEffectLifecycle.js
        ├── Exercise16_UseReducerContext.js
        ├── Exercise17_ErrorBoundaryDebugging.js
        ├── Exercise18_XHRAndJQuery.js
        └── TypeScriptDebugDemo.tsx
```

> Note: `typescript` and the `@types/*` packages are included as
> devDependencies purely so `TypeScriptDebugDemo.tsx` compiles — you do not
> need to write any other file in TypeScript.

## Submitting to GitHub (per handbook instructions)

1. Create a public repository in your personal GitHub account.
2. Copy the `week6` folder into your solutions repo (keep it week-wise).
3. Commit & push.
4. Share the repository URL with your POC on demand.
