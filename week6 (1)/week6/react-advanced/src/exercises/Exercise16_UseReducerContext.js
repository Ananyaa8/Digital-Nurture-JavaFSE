import React, { createContext, useContext, useReducer } from "react";

/**
 * Exercise 16 (Additional): useReducer + Context API
 * Objective: Manage more complex state with useReducer, and share state
 * across the component tree without prop-drilling using Context.
 */

const initialState = { items: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const items = [...state.items, action.payload];
      return { items, total: items.reduce((sum, i) => sum + i.price, 0) };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter((i) => i.id !== action.payload);
      return { items, total: items.reduce((sum, i) => sum + i.price, 0) };
    }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

const CartContext = createContext(null);

const CATALOG = [
  { id: 1, name: "Spring Boot Course", price: 499 },
  { id: 2, name: "React Course", price: 399 },
  { id: 3, name: "Docker Course", price: 299 },
];

function ProductList() {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <h4>Catalog</h4>
      {CATALOG.map((p) => (
        <div key={p.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span>{p.name} — ₹{p.price}</span>
          <button className="primary" onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

function CartSummary() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <h4>Cart ({state.items.length} items)</h4>
      <ul>
        {state.items.map((i, idx) => (
          <li key={idx}>
            {i.name} — ₹{i.price}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: i.id })}>✕</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>Total: ₹{state.total}</strong>
      </p>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear cart</button>
    </div>
  );
}

export default function Exercise16_UseReducerContext() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 16: useReducer + Context API (Shopping Cart)</h3>
      <CartContext.Provider value={{ state, dispatch }}>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ flex: 1 }}>
            <ProductList />
          </div>
          <div style={{ flex: 1 }}>
            <CartSummary />
          </div>
        </div>
      </CartContext.Provider>
    </div>
  );
}
