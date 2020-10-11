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
import Modal from "./Modal";
export default class BaiTapGioHang extends Component {
  handleDetail = (sanpham) => {
    this.setState({
      sanPhamChiTiet: sanpham,
    });
  };
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
      giaBan: "100000000",
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
      giaBan: "2300000000",
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
      giaBan: "765000000",
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
    danhSachGioHang: [],
  };

  handleDelete = (cart) => {
    let danhSachGioHang = this.state.danhSachGioHang;

    danhSachGioHang = danhSachGioHang.filter((item) => {
      return cart.maSanPham !== item.maSanPham;
    });
    this.setState({ danhSachGioHang });
  };

  handleAddSP = (sanPham) => {
    // console.log("sanPham : ", sanPham);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    // findIndex tim xem co ton tai trong mang hay ko :
    // neu co ton tai tra ve Index
    // neu ko ton tai tra ve -1

    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      //tim thay
      //cap nhat so luong
      danhSachGioHang[index].soLuong += 1;
    } else {
      // khong tim thay
      //set so luong = 1, push vao mang
      sanPham.soLuong = 1;
      // danhSachGioHang.push(sanPham);
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }

    //setState
    this.setState(
      {
        danhSachGioHang: danhSachGioHang,
      },
      () => {
        console.log(this.state.danhSachGioHang);
      }
    );
  };

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanpham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            handleDetail={this.handleDetail}
            handleAddSP={this.handleAddSP}
            sanPham={sanpham}
          />
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
            <Modal
              handleDelete={this.handleDelete}
              danhSachGioHang={this.state.danhSachGioHang}
            />
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
