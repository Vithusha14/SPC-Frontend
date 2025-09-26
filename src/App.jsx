// services/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Vegetables from "./pages/Vegetables.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import OrderComplete from "./pages/OrderComplete.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import NellaiKaruppattiCoffee from "./pages/NellaiKaruppattiCoffee.jsx";
import NellaiKaruppattiCard from "./pages/NellaiKaruppattiCard.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/complete" element={<OrderComplete />} />
          <Route path="/nk-coffee" element={<NellaiKaruppattiCoffee />} />
          <Route path="/nk-coffee/:id" element={<NellaiKaruppattiCard />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
