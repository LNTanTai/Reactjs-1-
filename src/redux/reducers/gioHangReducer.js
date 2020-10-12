const initialSate = {
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
  danhSachSanPham: [
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
  ],
  danhSachGioHang: [],
};

const giohangReducer = (state = initialSate, actions) => {
  switch (actions.type) {
    case "DETAIL_PRODUCT": {
      state.sanPhamChiTiet = actions.payload;
      return { ...state };
    }

    default:
      break;
  }
  return state;
};

export default giohangReducer;
