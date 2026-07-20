import React, { useState } from "react";

/**
 * TypeScript Debugging Demo (Module 10 hands-on companion)
 * -----------------------------------------------------------------------
 * The handbook's Module 10 objectives explicitly mention "Analyze JavaScript
 * AND TypeScript code using the Sources panel and source maps" and "Set
 * breakpoints, watches, and inspect variables in TypeScript files". Every
 * other exercise in this project is plain JS/JSX, so this single .tsx file
 * exists purely to give you a real TypeScript file to practice debugging —
 * see DEBUGGING.md, "Hands-on 4".
 *
 * It contains a type-related bug on purpose: `calculateDiscount` assumes
 * `discountPercent` is always a whole number between 0-100, but nothing
 * enforces that at the call site below, producing a wrong (not thrown)
 * result that you have to find with breakpoints/watches rather than a
 * console error.
 */

interface Product {
  id: number;
  name: string;
  price: number;
}

interface DiscountResult {
  original: number;
  discounted: number;
  savings: number;
}

// BUG: no runtime clamp on discountPercent — passing e.g. 120 or -10
// silently produces a nonsensical result instead of failing loudly.
function calculateDiscount(price: number, discountPercent: number): DiscountResult {
  const discounted = price - (price * discountPercent) / 100;
  return {
    original: price,
    discounted: Math.round(discounted * 100) / 100,
    savings: Math.round((price - discounted) * 100) / 100,
  };
}

// FIXED version — set a breakpoint on the line below `clamp(...)`, watch
// `discountPercent` before and after clamping to see the difference.
function calculateDiscountFixed(price: number, discountPercent: number): DiscountResult {
  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  const safePercent = clamp(discountPercent, 0, 100);
  const discounted = price - (price * safePercent) / 100;
  return {
    original: price,
    discounted: Math.round(discounted * 100) / 100,
    savings: Math.round((price - discounted) * 100) / 100,
  };
}

const PRODUCT: Product = { id: 1, name: "Mechanical Keyboard", price: 2999 };

export default function TypeScriptDebugDemo(): JSX.Element {
  const [discountPercent, setDiscountPercent] = useState<number>(120); // intentionally out of range

  const buggyResult = calculateDiscount(PRODUCT.price, discountPercent);
  const fixedResult = calculateDiscountFixed(PRODUCT.price, discountPercent);

  return (
    <div className="card">
      <span className="tag" style={{ background: "#e0e7ff", color: "#3730a3" }}>
        TypeScript debugging demo
      </span>
      <h3>TypeScript Debugging Demo</h3>

      <label>Discount % (try values below 0 or above 100)</label>
      <input
        type="number"
        value={discountPercent}
        onChange={(e) => setDiscountPercent(Number(e.target.value))}
      />

      <h4>Buggy: calculateDiscount()</h4>
      <p>
        {PRODUCT.name} — original ₹{buggyResult.original}, discounted{" "}
        <strong>₹{buggyResult.discounted}</strong> (savings ₹{buggyResult.savings})
      </p>

      <h4>Fixed: calculateDiscountFixed() (percent clamped to 0-100)</h4>
      <p>
        {PRODUCT.name} — original ₹{fixedResult.original}, discounted{" "}
        <strong>₹{fixedResult.discounted}</strong> (savings ₹{fixedResult.savings})
      </p>

      <p style={{ fontSize: 13, color: "#555" }}>
        Set a breakpoint inside <code>calculateDiscount</code>, watch{" "}
        <code>discountPercent</code>, and step through to see how an
        out-of-range percentage silently produces a negative "discounted"
        price — TypeScript's types don't stop this because nothing here
        violates the declared <code>number</code> type, only the business
        rule. Compare with the clamped version.
      </p>
    </div>
  );
}
