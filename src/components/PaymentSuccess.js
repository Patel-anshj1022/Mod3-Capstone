import React from "react";
import { Link } from "react-router-dom";

import "../styles/PaymentSuccess.css";

export default function PaymentSuccess() {
  return (
    <section className="payment-success">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase. Your order has been processed.</p>
      <Link to="/">Return to Home</Link>
    </section>
  );
}
