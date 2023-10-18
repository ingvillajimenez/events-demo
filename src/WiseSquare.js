import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  dispenseWisdom() {
    const messages = [
      /* wise messages go here */
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    ];
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

export default WiseSquare;
