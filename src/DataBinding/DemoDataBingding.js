import React, { Component } from "react";

export default class DemoDataBingding extends Component {
  // thuoc tinh cua class
  ten = "Nguyen Phong Hao";
  lop = 52;

  renderName = () => {
    return <p>ten : {this.ten}</p>;
  };

  render() {
    // bie cua phuong thuc render
    const hinhAnh =
      "https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349";

    return (
      <div>
        <h2>DataBinding</h2>
        {/* <p>ten : {this.ten}</p> */}
        {this.renderName()}
        <p>lop : {this.lop}</p>
        <img src={hinhAnh} alt="hinh Anh"></img>
      </div>
    );
  }
}
