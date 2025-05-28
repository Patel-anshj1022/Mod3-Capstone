import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "../styles/Navbar.css";

export default function Navbar() {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Aerolite
      </Link>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
          aria-label="Shopping Cart"
        >
          Cart
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </div>
    </nav>
  );
}
