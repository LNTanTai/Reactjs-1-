import React, { Component } from "react";
import { actGetKeyword } from "./Module/action";
import { connect } from "react-redux";

class Search extends Component {
  handleOnChange = (e) => {
    const { value } = e.target;
    this.props.geyKeyword(value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    geyKeyword: (keyword) => {
      dispatch(actGetKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
