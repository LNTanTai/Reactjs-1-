import React, { Component } from "react";

export default class ClassEvent extends Component {
  //phuong thuc cua class
  handleFocus = () => {
    alert("da focus roi");
  };
  handleFocusParams = (mess) => {
    console.log(mess);
  };
  render() {
    return (
      <div>
        <h2>ClassEvent</h2>
        <input type="text" placeholder="focus" onFocus={this.handleFocus} />
        <input
          type="text"
          placeholder="focus params"
          onFocus={() => this.handleFocusParams(" hello")}
        />
      </div>
    );
  }
}
