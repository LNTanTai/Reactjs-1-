import React, { Component, PureComponent } from "react";

export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
      numberChild: 5,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps", nextProps);
  }

  static getDerivedStateFromProps(newProps, currentSate) {
    console.log("getDerivedStateFromProps", newProps, currentSate);
    if (newProps && newProps.number === currentSate.numberChild) {
      return {
        username: "Dinh Phuc Nguyen",
      };
    }
    return null;
  }

  render() {
    console.log("render - Child component");
    return (
      <div>
        Child
        <h3>
          Props number: {this.props.number} - numberChild:{" "}
          {this.state.numberChild} - username: {this.state.username}
        </h3>
      </div>
    );
  }
}
