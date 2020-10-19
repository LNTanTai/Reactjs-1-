import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {
  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      return <UserItem key={index} user={user} />;
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
  };
};

export default connect(mapStateToProps, null)(Users);
