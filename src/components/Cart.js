import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "../styles/Cart.css";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map(({ id, name, price, quantity, image }) => (
          <li key={id} className="cart-item">
            <img src={image} alt={name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{name}</h3>
              <p>${price.toLocaleString()}</p>
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => updateQuantity(id, +e.target.value)}
                />
              </label>
              <button onClick={() => removeFromCart(id)} className="remove-btn">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toLocaleString()}</p>
        <button onClick={() => navigate("/checkout")} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}
