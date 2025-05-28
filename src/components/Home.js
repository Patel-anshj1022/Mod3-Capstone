import React from "react";
import ProductList from "./ProductList";

import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Aerolite</h1>
      <p>
        Discover the finest selection of private jets, helicopters, and air
        vehicles available for purchase. Browse our catalog below and find your
        next aircraft today.
      </p>
      <ProductList />
    </div>
  );
}
