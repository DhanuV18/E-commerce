import React from 'react'

import Product from './Product'
import './Shop.scss'

import { PRODUCTS, products } from './products'

function Shop() {
  return (
    <div className='shop__component'>
      <div className='shop__header'>
        <h2 className='shop__heading'>Welcome to Amazing Cart</h2>
      </div>
      <div className='container shop__products grid grid--1x2 grid--1x3'>
        {products.map((product) => (
          <Product data={ product } />
        ))}
        
      </div>
    </div>
  )
}

export default Shop