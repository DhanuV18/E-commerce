import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.scss'

function Navbar() {
  return (
      <div className='navbar'>
          <div className='links'>
            <h1 className='navbar__heading'>Amazing Cart</h1>
        
              <Link to="/" className='shop'>Shop</Link>
                <div className='navbar__menu'>
                  <Link to="/cart">
                    <ShoppingCart size={40} className='cart' />    
                  </Link>
                </div>
          </div>    
      </div>    
  )
}

export default Navbar 