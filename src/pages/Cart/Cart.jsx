import React, { useContext } from "react";
import './Cart.scss'

import { ShopContext } from "../../context/ShopContext";

import { CartItem } from './CartItem'
import { useNavigate } from "react-router-dom";


import { products } from "../Shop/products";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="cart__heading">Your Cart Items</h1>
      </div>
      <div className="cart">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} className="cart__item" />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h3 className="checkout__subtotal">Subtotal: ${totalAmount} </h3>
          <div className="checkout__buttons">
              <button onClick={() => navigate("/")} className="checkout__shopping">Continue Shopping</button>
              <button className="checkout__checkout"
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >            
                Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="empty">Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
