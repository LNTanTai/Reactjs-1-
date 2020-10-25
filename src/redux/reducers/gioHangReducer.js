import {
  DELETE_PRODUCT,
  TANG_GIAM_SL,
  DETAIL_PRODUCT,
  ADD_PRODUCT,
} from "./../constains";

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
    case DETAIL_PRODUCT: {
      state.sanPhamChiTiet = actions.payload;
      return { ...state };
    }

    case ADD_PRODUCT: {
      console.log(actions);
      let danhSachGioHang = [...state.danhSachGioHang];
      const index = state.danhSachGioHang.findIndex((items) => {
        return items.maSanPham === actions.payload.maSanPham;
      });
      if (index != -1) {
        //Tim thay => update SL
        const product = { ...danhSachGioHang[index] };
        product.soLuong++;
        danhSachGioHang[index] = product;
        // danhSachGioHang[index].soLuong += 1;
      } else {
        //Add vao gio hang
        actions.payload.soLuong = 1;
        danhSachGioHang = [...danhSachGioHang, actions.payload];
      }

      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }

    case DELETE_PRODUCT: {
      let danhSachGioHang = [...state.danhSachGioHang]; //spread operator
      //boc tach du lieu
      // let {danhSachGioHang} = state

      danhSachGioHang = danhSachGioHang.filter((item) => {
        return item.maSanPham !== actions.payload.maSanPham;
      });

      state.danhSachGioHang = danhSachGioHang;

      return { ...state };
    }

    case TANG_GIAM_SL: {
      const index = state.danhSachGioHang.findIndex((item) => {
        return item.maSanPham === actions.payload.product.maSanPham;
      });
      if (index !== -1) {
        let danhSachGioHang = [...state.danhSachGioHang];
        const product = { ...state.danhSachGioHang[index] };
        if (actions.payload.status) {
          //Tang
          product.soLuong++;
          danhSachGioHang[index] = product;
        } else {
          //giam
          if (product.soLuong > 1) {
            product.soLuong--;
            danhSachGioHang[index] = product;
          }
        }

        state.danhSachGioHang = danhSachGioHang;
      }
      return { ...state };
    }

    default:
      break;
  }
  return state;
};

export default giohangReducer;
