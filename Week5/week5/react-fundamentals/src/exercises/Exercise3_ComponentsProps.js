import React from "react";

/**
 * Exercise 3: React Components and Props
 * Objective: Functional components, class components, passing data via
 * props, and default props.
 */

// Functional component receiving props
function EmployeeCard({ name, role, experience }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
      }}
    >
      <strong>{name}</strong> — {role} ({experience} yrs experience)
    </div>
  );
}

// Default props example
function Greeting({ userName }) {
  return <p>Hello, {userName}! Welcome to Deep Skilling.</p>;
}
Greeting.defaultProps = {
  userName: "Guest",
};

// Class component receiving props (equivalent to the functional one above)
class EmployeeCardClass extends React.Component {
  render() {
    const { name, role, experience } = this.props;
    return (
      <div
        style={{
          border: "1px dashed #4c5bff",
          borderRadius: 8,
          padding: 12,
          marginBottom: 8,
        }}
      >
        <strong>{name}</strong> — {role} ({experience} yrs) [class component]
      </div>
    );
  }
}

const employees = [
  { id: 1, name: "Asha Rao", role: "Java Developer", experience: 3 },
  { id: 2, name: "Kiran Mehta", role: "React Developer", experience: 2 },
];

export default function Exercise3_ComponentsProps() {
  return (
    <div className="card">
      <span className="tag">Mandatory</span>
      <h3>Exercise 3: Components & Props</h3>

      <h4>Functional Components (with props)</h4>
      {employees.map((e) => (
        <EmployeeCard key={e.id} {...e} />
      ))}

      <h4>Class Component (same data via props)</h4>
      <EmployeeCardClass name="Ravi Kumar" role="Spring Boot Developer" experience={4} />

      <h4>Default Props</h4>
      <Greeting />
      <Greeting userName="Priya" />
    </div>
  );
}
