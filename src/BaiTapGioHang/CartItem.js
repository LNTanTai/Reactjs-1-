import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.maSanPham}</td>
        <td>{this.props.cart.tenSanPham}</td>
        <td>
          <img src={this.props.cart.hinhAnh} width={50} alt />
        </td>
        <td>
          <button>-</button>1<button>+</button>
        </td>
        <td>{this.props.cart.giaBan}</td>
        <td>2343546</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
