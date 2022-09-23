import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderProduct = () => {
        const {dataPhone,xemChiTiet,addToCart} = this.props;
        console.log(dataPhone);
        return dataPhone.map((prod,index) => {
            return <div className='col-3' key={index}>
                <ProductItem productdetail={prod} xemChiTiet={xemChiTiet} addToCart={addToCart} />
            </div>
        })
    }
  render() {
    return (
      <div>
        <h3>Product list</h3>
        <div className='row'>
            {this.renderProduct()}
        </div>
      </div>
    )
  }
}
