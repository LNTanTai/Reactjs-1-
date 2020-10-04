/**
 * các bước thực hiện:
 * 1. dàn layout (html css)
 * 2. xác định dât thay đổi và lưu vào state
 * 3. lấy dât trong statw đi binding ra jsx
 * 4. render mảng dữ liệu
 * 5. xây dựng chức năng xem chi tiết
 * 6. xây dựng chức năng thêm giỏ hàng
 * 7. xây dựng chức năng xóa khỏi giỏ hàng
 * 8. xây dựng chức năng tăng giảm sood lượng
 * 9. xây dựng chức năng hiển thị
 */

import React, { Component } from "react";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      maSanPham: "1",
      tenSanPham: "VS Phone",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    {
      maSanPham: "2",
      tenSanPham: "Meizu Phone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDieuHanh: "Android 5.0 (Pie)",
      cameraTruoc: "40 MP",
      cameraSau: "Chính 40 MP & Phụ 8 MP, 5 MP",
      ram: "10 GB",
      rom: "12 GB",
    },
    {
      maSanPham: "3",
      tenSanPham: "Apple Phone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 10.0 (Pie)",
      cameraTruoc: "50 MP",
      cameraSau: "Chính 43 MP & Phụ 4 MP, 5 MP",
      ram: "5 GB",
      rom: "20 GB",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSanPham: "1",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
  };

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanpham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (0)
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: 1000 }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Mã sản phẩm</th>
                          <th>tên sản phẩm</th>
                          <th>hình ảnh</th>
                          <th>số lượng</th>
                          <th>đơn giá</th>
                          <th>thành tiền</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
