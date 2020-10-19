import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "./Module/action";

class UserItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.phoneNumber}</td>
        <td>{this.props.user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            onClick={() => {
              const user = this.props.user;
              this.props.editUser(user);
            }}
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(this.props.user);
              const user = this.props.user;
              this.props.deleteUser(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => {
      dispatch(actDeleteUser(user));
    },

    editUser: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
