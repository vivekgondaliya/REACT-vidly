import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let classes = this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
        onClick={this.props.onClick}
      />
    );
  }
}

export default Like;
