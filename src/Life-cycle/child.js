import React, { Component, PureComponent } from "react";

export default class Child extends PureComponent {
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps", nextProps);
  }

  render() {
    console.log("render - Child component");
    return <div>Child</div>;
  }
}
