import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import PaymentSuccess from "./components/PaymentSuccess";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
