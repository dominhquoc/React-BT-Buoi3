import React, { Component } from 'react'

export default class CartModal extends Component {
  render() {
    const {gioHang, xoaGioHang, tangGiamSoLuong} = this.props;
    return (
      <div>
                <div>
          {/* Modal trigger button */}
          {/* <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            Launch
          </button> */}
          {/* Modal Body */}
          {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
          <div
            className="modal fade"
            id="modalId"
            tabIndex={-1}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                <table className="table">
          <thead>
          <tr>
            <td>MaSp</td>
            <td>Hinhanh</td>
            <td>TenSp</td>
            <td>Soluong</td>
            <td>Dongia</td>
            <td>Thanhtien</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
            {gioHang.map((spHG,index) =>{
              return (<tr key={index}>
                <td>{spHG.maSP}</td>
                <td><img src={spHG.hinhAnh} width={50} height={50}/></td>
                <td>{spHG.tenSP}</td>
                <td>
                  <button className="btn btn-success" onClick={()=> tangGiamSoLuong(spHG.maSP,true)}>+</button>
                  {spHG.soLuong}
                  <button className="btn btn-success" onClick={()=> tangGiamSoLuong(spHG.maSP,false)}>-</button>
                  </td>
                <td>{spHG.giaBan.toLocaleString()}</td>
                <td>{(spHG.soLuong * spHG.giaBan).toLocaleString()}</td>
                <td><button className='btn btn-danger' onClick={()=>xoaGioHang(spHG.maSP)}>Xoa</button></td>
              </tr>
)            }) }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tong tien</td>
              <td>{
                this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                  return tongTien += spGioHang.soLuong * spGioHang.giaBan
                }, 0).toLocaleString()}</td>
            </tr>
          </tfoot>
         </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
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
          {/* Optional: Place to the bottom of scripts */}
        </div>
      </div>
    )
  }
}
