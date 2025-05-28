import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="product-card" aria-label={`Aircraft: ${product.name}`}>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toLocaleString()}</p>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
