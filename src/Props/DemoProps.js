import React, { Component } from "react";
import FunctionProps from "./FunctionProps";
import ClassProp from "./ClassProp";

export default class DemoProps extends Component {
  type = "Husky";
  image =
    "https://kenh14cdn.com/thumb_w/600/2019/12/4/stupidhuskyfaceno9001bysimongj35dbiznmn-fullview-1575453752364358512785-crop-15754537713411547415252.jpg";

  image2 =
    "https://image2.tienphong.vn/w665/uploads/2018/10/5bc41f947aa93-1.jpg";

  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* Prop dung de truyen du lieu giua cac component  */}

        {/* cach truyen du lieu  */}
        <FunctionProps loaicho={this.type} cho={this.image} />
        <ClassProp typeDog={this.type} imgHusky={this.image2} />
      </div>
    );
  }
}
