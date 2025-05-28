import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

import "../styles/ProductList.css";

export default function ProductList() {
  return (
    <section className="product-list" aria-label="Aircraft product listings">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
