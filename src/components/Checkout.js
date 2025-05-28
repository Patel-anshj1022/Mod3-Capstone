import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "../styles/Checkout.css";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    paymentMethod: "card",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.fullName.trim()) return "Full Name is required";
    if (!form.email.trim()) return "Email is required";
    if (form.paymentMethod === "card") {
      if (!/^\d{16}$/.test(form.cardNumber)) return "Card Number must be 16 digits";
      if (!/^\d{2}\/\d{2}$/.test(form.expiry)) return "Expiry must be MM/YY";
      if (!/^\d{3}$/.test(form.cvv)) return "CVV must be 3 digits";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setLoading(true);

    // Fake payment processing delay
    setTimeout(() => {
      setLoading(false);
      clearCart();
      navigate("/success");
    }, 2000);
  };

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <p>Total to pay: ${totalPrice.toLocaleString()}</p>

      <form onSubmit={handleSubmit} className="checkout-form" noValidate>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <fieldset>
          <legend>Payment Method</legend>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={form.paymentMethod === "card"}
              onChange={handleChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="wire"
              checked={form.paymentMethod === "wire"}
              onChange={handleChange}
            />
            Wire Transfer
          </label>
        </fieldset>

        {form.paymentMethod === "card" && (
          <>
            <label>
              Card Number
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                maxLength="16"
                required
                inputMode="numeric"
                pattern="\d{16}"
              />
            </label>
            <label>
              Expiry (MM/YY)
              <input
                type="text"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                maxLength="5"
                placeholder="MM/YY"
                required
                pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              />
            </label>
            <label>
              CVV
              <input
                type="text"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                maxLength="3"
                required
                inputMode="numeric"
                pattern="\d{3}"
              />
            </label>
          </>
        )}

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </section>
  );
}
