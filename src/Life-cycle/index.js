import React, { Component } from "react";
import Child from "./child";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("constructor - chay 1 lan duy nhat");
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount - chay 1 lan duy nhat");
  }

  componentDidMount() {
    /**
     * goi Api, nhieu thu quan trong khac
     */
    console.log("componentDidMount - chay 1 lan duy nhat");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate - chay khi state thay doi");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - chay khi state thay doi");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextState.number === 3) {
      return false;
    }
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    console.log("render - chay lai khi state thay doi");
    return (
      <div>
        <h3>Life Cycle</h3>
        <h1>Number: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: ++this.state.number,
            });
          }}
        >
          Tang so
        </button>
        <Child number={this.state.number} />
      </div>
    );
  }
}
export default LifeCycle;
