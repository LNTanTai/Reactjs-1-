import React, { Component } from "react";
import { actSummitUser } from "./Module/action";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    /**
     * componentWillReceiveProps chay nhieu lan, phu thuoc nextPtops thay doi
     */
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        username: "",
        id: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  handleOnChange = (event) => {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  handleOnSubmit = (event) => {
    // khong load lai trang
    event.preventDefault();
    // console.log(this.state);
    this.props.submitUser(this.state);
    this.refs.btnClose.click();
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref="btnClose"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleOnChange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnChange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnChange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => {
      dispatch(actSummitUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
