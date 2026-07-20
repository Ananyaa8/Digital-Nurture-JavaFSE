import React from "react";

/**
 * Exercise 4: React ES6 and JSX
 * Objective: ES6 classes, class inheritance, arrow functions, let/const,
 * JSX basics, nested elements, JSX attributes, JSX inline styling.
 */

// ES6 class + inheritance
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  describe() {
    return `This vehicle is a ${this.brand}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  describe() {
    return `${super.describe()} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla");

// Arrow functions + let/const
const add = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);

export default function Exercise4_ES6JSX() {
  const jsxStyle = { color: "#4c5bff", fontWeight: "bold" };

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 4: ES6 Features & JSX</h3>

      <h4>ES6 Class Inheritance</h4>
      <p>{myCar.describe()}</p>

      <h4>Arrow Functions</h4>
      <p>add(2, 3) = {add(2, 3)}</p>
      <p>Doubled array: {doubled.join(", ")}</p>

      <h4>JSX: Nested Elements, Attributes & Inline Styling</h4>
      <div id="jsx-demo" className="jsx-box" style={jsxStyle}>
        <span>Nested span</span>{" "}
        <em>with an inline style applied via a JS object</em>
      </div>

      <h4>JSX Attribute Example (image with alt text)</h4>
      <p>
        <code>{`<img src="logo.png" alt="Company Logo" />`}</code> — JSX
        attributes use camelCase (e.g., <code>className</code>,{" "}
        <code>onClick</code>) instead of HTML's lowercase attributes.
      </p>
    </div>
  );
}
