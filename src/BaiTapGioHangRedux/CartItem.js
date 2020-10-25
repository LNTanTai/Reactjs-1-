import React, { Component } from "react";
import { connect } from "react-redux";
import { actDelete, actTangGiamSL } from "./../redux/actions";

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.maSanPham}</td>
        <td>{this.props.cart.tenSanPham}</td>
        <td>
          <img src={this.props.cart.hinhAnh} width={50} alt />
        </td>
        <td>
          <button
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              this.props.handleSPTangGiam(cartDuocNhan, false);
            }}
          >
            -
          </button>
          {this.props.cart.soLuong}
          <button
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              this.props.handleSPTangGiam(cartDuocNhan, true);
            }}
          >
            +
          </button>
        </td>
        <td>{this.props.cart.giaBan}</td>
        <td>{this.props.cart.giaBan * this.props.cart.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              // this.props.handleDelete(cartDuocNhan);
              this.props.deleteProduct(cartDuocNhan);
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
    deleteProduct: (product) => {
      dispatch(actDelete(product));
    },
    handleSPTangGiam: (product, status) => {
      const data = {
        product,
        status,
      };
      dispatch(actTangGiamSL(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
