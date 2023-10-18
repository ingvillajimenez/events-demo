import React, { Component } from "react";
import "./WiseSquareWithProps.css";

class WiseSquareWithProps extends Component {
  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    ],
  };

  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }

  dispenseWisdom() {
    console.log("THIS IS...", this);
    const { messages } = this.props;
    const rIndex = Math.floor(Math.random() * messages.length);
    alert(messages[rIndex]);
  }

  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        🤔
      </div>
    );
  }
}

export default WiseSquareWithProps;
