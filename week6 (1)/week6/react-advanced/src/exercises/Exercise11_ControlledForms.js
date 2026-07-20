import React, { useState } from "react";

/**
 * Exercise 11: React Forms - Controlled Inputs
 * Objective: Controlled inputs, validation, displaying error messages.
 */
export default function Exercise11_ControlledForms() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.age) {
      newErrors.age = "Age is required.";
    } else if (Number(form.age) < 18) {
      newErrors.age = "You must be at least 18 years old.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(form);
    } else {
      setSubmitted(null);
    }
  };

  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 11: Controlled Forms &amp; Validation</h3>

      <form onSubmit={handleSubmit} noValidate>
        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label>Age</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} />
        {errors.age && <p className="error-text">{errors.age}</p>}

        <button className="primary" type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: 16, background: "#e6f7ec", padding: 12, borderRadius: 8 }}>
          ✅ Registered: <strong>{submitted.name}</strong> ({submitted.email},
          age {submitted.age})
        </div>
      )}
    </div>
  );
}
