import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJS", "NodeJS", "VueJS"];
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sach Khoa Hoc</h3>
        <ul>{this.danhSachKhoaHoc}</ul>
      </div>
    );
  }
}
