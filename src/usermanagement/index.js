import React, { Component } from "react";
import { connect } from "react-redux";
import { actEditUser } from "./Module/action";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              const user = this.props.user;
              this.props.editUser(user);
            }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: () => {
      dispatch(actEditUser(null));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
