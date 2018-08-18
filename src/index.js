import React from "react";
import ReactDOM from "react-dom";

const title = "My Minimal React Webpack Babel Setup";
class TimeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  increment = () => {
    this.setState({
      seconds: this.state.seconds + 1
    });
  };

  decrement = () => {
    if (this.state.seconds > 0)
      this.setState({
        seconds: this.state.seconds - 1
      });
  };

  resetCounter = () => {
    this.setState({
      seconds: 0
    });
  };

  start = () => {
    this.intervalId = setInterval(this.increment, 1000);
  };

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <section
        style={{ textAlign: "center", background: "rgb(149, 142, 199)" }}
      >
        <h1>{title}</h1>
        <div>Seconds: {this.state.seconds}</div>
        <article>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.resetCounter}>Reset</button>
        </article>
        <article>
          <button
            onClick={this.increment}
            style={{ border: "1px solid blue", padding: 10, width: "40px" }}
          >
            +
          </button>
          <button
            onClick={this.decrement}
            style={{ border: "1px solid blue", padding: 10, width: "40px" }}
          >
            -
          </button>
        </article>
      </section>
    );
  }
}

ReactDOM.render(<TimeCounter />, document.getElementById("app"));

module.hot.accept();
