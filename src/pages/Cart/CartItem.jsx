import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} className="cartItem__image" />
      <div className="cartItem__description">
        <h3 className="cartItem__productName">{ productName }</h3>                 
        <p className="cartItem__price">Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} className="btn__decrease"> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="cartItem__input"
          />
          <button onClick={() => addToCart(id)}  className="btn__increase"> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem