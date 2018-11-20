import React, { Component } from "react";

class MouseRender extends Component {
  state = { x: 0, y: 0 };

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseove", this.onMouseMove);
  }

  onMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    const { x, y } = this.state;
    return (
      <span>
        Mouse X: {x} Mouse Y: {y}
      </span>
    );
  }
}

export default MouseRender;
