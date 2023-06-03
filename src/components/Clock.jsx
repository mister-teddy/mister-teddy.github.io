import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Date(),
    };
    window.setInterval(() => this.setState({ clock: new Date() }), 1000);
  }

  render() {
    return (
      <div className="clock fg-white">
        {this.state.clock.toLocaleTimeString()}
        <br />
        {this.state.clock.toLocaleDateString()}
      </div>
    );
  }
}
