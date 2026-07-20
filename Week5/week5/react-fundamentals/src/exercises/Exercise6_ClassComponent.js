import React from "react";

/**
 * Exercise 6 (Additional): Class Component with constructor & lifecycle
 * Objective: Component constructor, lifecycle methods (mount/update/unmount).
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <p>Current time: {this.state.time.toLocaleTimeString()}</p>;
  }
}

class ToggleClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prev) => ({ show: !prev.show }));
  }

  render() {
    return (
      <div>
        <button className="primary" onClick={this.toggle}>
          {this.state.show ? "Unmount Clock" : "Mount Clock"}
        </button>
        {this.state.show && <Clock />}
      </div>
    );
  }
}

export default function Exercise6_ClassComponent() {
  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 6: Class Component & Lifecycle</h3>
      <p>
        The <code>Clock</code> class component uses a <code>constructor</code>{" "}
        to initialize state, <code>componentDidMount</code> to start a timer,
        and <code>componentWillUnmount</code> to clean it up — click the
        button to mount/unmount and watch the interval start/stop.
      </p>
      <ToggleClock />
    </div>
  );
}
