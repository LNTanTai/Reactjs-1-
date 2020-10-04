import React from "react";

//cach nhan du lieu tu props

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>Function Props</h3>
      <p>type : {props.loaicho}</p>
      <img src={props.cho} alt="hinh dep"></img>
    </div>
  );
}
