import React, { Component } from "react";
import { connect } from "react-redux";
import { actThemSL, actDetail } from "./../redux/actions";

class SanPham extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                const sanPhamDuocNhan = this.props.sanPham;
                this.props.handleDetail(this.props.sanPham);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                const sanPhamDuocNhan = this.props.sanPham;
                this.props.handleAddCart(sanPhamDuocNhan);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    //key : value
    //key la props cua component : value la phuong thuc gui action len store
    handleDetail: (sp) => {
      dispatch(actDetail(sp));
    },
    handleAddCart: (product) => {
      dispatch(actThemSL(product));
    },
  };
};

export default connect(null, mapDispatchToprops)(SanPham);
