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
          {/* Cart Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="cart-icon"
            aria-hidden="true"
          >
            <path d="M0 1a1 1 0 0 1 1-1h1.22a.5.5 0 0 1 .49.4L3.89 4H14.5a.5.5 0 0 1 .49.6l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.49-.4L1.61 2H1a1 1 0 0 1-1-1zm3.14 5l1.25 5h7.22l1.25-5H3.14zM5.5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          Cart
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </div>
    </nav>
  );
}
