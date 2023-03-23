import React, {useContext} from 'react'
import './Shop.scss'
import { ShopContext } from '../../context/ShopContext'


function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    
      <div className='product'>
        <img src={productImage} className='product__image' />
        <div className='description'>
          <h3 className='product__heading'><b>{productName}</b></h3>
          <p className='product__price'>${price}</p>
        </div>
        <button className='btn product__cart' onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    
  )
}

export default Product