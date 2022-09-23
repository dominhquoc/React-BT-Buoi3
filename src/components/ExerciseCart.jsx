import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    spChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    gioHang : []
  };

  xemChiTiet = (prodClick) => {
    this.setState({
      spChiTiet: prodClick,
    });
  };

  addToCart = (sanPhamChon) => {
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenS: sanPhamChon.tenSP,
    
     
      giaBan: sanPhamChon.giaBan,
      soLuong:1,
      hinhAnh: sanPhamChon.hinhAnh}
      //kt
      var gioHangCapNhat = [...this.state.gioHang];
      let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
      if(index!==-1){
        gioHangCapNhat[index].soLuong += 1;
      }else{
        gioHangCapNhat.push(spGioHang)
      }
    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  xoaGioHang = (maSP) => {
    //Tim trong gio hang co sp chua maSp dc click thi
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    // if(index!==-1){
    //   gioHangCapNhat.splice(index,1);
    // }

     var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);
     //Cap nhat lai state gio hang va render giao dien
    
    this.setState({
      gioHang: gioHangCapNhat
    })
}

  tangGiamSoLuong = (maSP,tangGiam) => {
   var gioHangCapNhat = [...this.state.gioHang];
   var index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
   if(tangGiam){
    gioHangCapNhat[index].soLuong += 1;
   }else{
    if(gioHangCapNhat[index].soLuong>1){
      gioHangCapNhat[index].soLuong -= 1;
    }
   }
   //cap nhat
   this.setState({
    gioHang: gioHangCapNhat
})
}

  render() {
    let {
      
      tenSP,
      hinhAnh,
      manHinh,
      ram,
      rom,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
   
    } = this.state.spChiTiet;
    let tongSoLuong = this.state.gioHang.reduce((tsl,spHG)=>{
      return tsl += spHG.soLuong;
    }, 0)
    return (
      <div className="container mt-2">
        <div className="row">
          <CartModal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
          <div className='text-right'><span className='text-danger' style={{cursor:'pointer',fontSize:"17px",fontWeight:"bold"}}  data-bs-toggle="modal"
            data-bs-target="#modalId">Gio hang ({tongSoLuong})</span></div>
          <ProductList dataPhone={dataPhone} xemChiTiet={this.xemChiTiet} addToCart={this.addToCart} />
        </div>
        <div className="mt-3">
          <div className="row">
            <div className="col-4">
              <h3>{tenSP}</h3>
              <img
                src={hinhAnh}
                height={400}
                className="w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-8">
              <h3>Thong tin chi tiet</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Man hinh</th>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <th>He dieu hanh</th>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th>Cam truoc</th>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th>Cam sau</th>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
