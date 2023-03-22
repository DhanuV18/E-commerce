import React from 'react'
import './Shop.scss'


function Product(props) {
 const { id, productName, price, productImage } = props.data;
  return (
    
      <div className='product'>
        <img src={productImage} className='product__image' />
        <div className='description'>
          <h3><b>{productName}</b></h3>
          <p>${price}</p>
        </div>
        <button className='btn product__cart'>Add To Cart</button>
      </div>
    
  )
}

export default Product