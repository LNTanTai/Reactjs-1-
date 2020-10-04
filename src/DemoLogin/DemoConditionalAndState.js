import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /**
   * isLogin la thuoc tinh cua class
   *              true : da dang nhap => hien ten nguoi dung
   *              false : chua dang nhap => hien nut login
   */
  state = {
    isLogin: false,
  };

  //   isLogin = false;

  //phuong thuc class
  handleClick = () => {
    // this.isLogin = true;
    // this.state.isLogin = true;
    this.setState({
      isLogin: true,
    });
  };
  renderLogin = () => {
    //cach 1 dung if else
    if (this.state.isLogin) {
      return <p>Nguyen Phong Hao</p>;
    } else {
      return <button onClick={this.handleClick}>Login</button>;
    }

    //cach 2 dung toan tu 3 ngoi
    // dieu kien ? xu ly dung : xu ly sai
    // return this.isLogin ? <p>Nguyen Phong Hao</p> : <button>Login</button>;
  };
  render() {
    return (
      <div>
        <h2> Conditional Ans State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
