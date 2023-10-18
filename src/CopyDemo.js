import React, { Component } from "react";

class CopyDemo extends Component {
  handleCopy() {
    alert("STOP STEALING FROM ME!");
  }

  render() {
    return (
      <div>
        <h3>Try Copying Some of this Text: </h3>
        <section
          style={{ width: "300px", display: "inline-block" }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          nulla tellus, viverra quis ligula eget, imperdiet mattis mauris. Donec
          vitae tellus congue ex luctus commodo. Morbi suscipit tellus lacus,
          quis imperdiet enim accumsan eu. Vestibulum id semper eros, at
          accumsan erat. Nullam lacinia ac mauris nec commodo. Nullam vitae
          lacinia lectus. Maecenas quis condimentum augue, nec fringilla risus.
          Praesent iaculis nisi ante, vel efficitur erat dictum vitae.
        </section>
      </div>
    );
  }
}

export default CopyDemo;
