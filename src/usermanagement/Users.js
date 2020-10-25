import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {
  renderUserList = () => {
    let { userList, keyWord } = this.props;
    console.log(keyWord);
    userList = userList.filter((item) => {
      return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    });

    return userList.map((item) => {
      return <UserItem key={item.id} user={item} />;
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
    keyWord: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(Users);
