import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "./Module/action";

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            onClick={() => {
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
