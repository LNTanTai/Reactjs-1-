import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJS", "NodeJS", "VueJS"];

  //   danhSachKhoaHoc = [<li>ReactJS</li>, <li>NodeJS</li>, <li>VueJS</li>];

  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sach Khoa Hoc</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
