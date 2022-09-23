import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {

    let {productdetail, xemChiTiet, addToCart} = this.props;

    return (
      <div className='card'>
        <img src={productdetail.hinhAnh} alt='...' />
        <div className='card-body'>
            <p>{productdetail.tenSP}</p>
            <button className='btn btn-success' onClick={() => {
                xemChiTiet(productdetail)
            }}>Xem chi tiet</button>
            <button className='btn btn-danger' onClick={() => {
                addToCart(productdetail) 
            }}  data-bs-toggle="modal"
            data-bs-target="#modalId">AddToCart</button>
        </div>
      </div>
    )
  }
}
