import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../components/CartContext.jsx";

export default function NellaiKaruppattiCard() {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const product = {
    id: "nk-coffee-single",
    name: "Nellai Karupatti Coffee",
    price: 220,
    image: "/nk.png",
    description:
      "Traditional palm jaggery coffee, slow-brewed for a deep, caramelized sweetness. Perfect morning warmth.",
  };

  return (
    <div className="min-h-screen bg-orange-50/60">
      <Navbar isFixed={false} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-[420px] object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h1 className="text-2xl font-bold text-gray-900 font-[Aclonica]">{product.name}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4 text-2xl font-semibold">₹{product.price} <span className="text-sm text-gray-500">/ 250g</span></div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-gray-600">Quantity</span>
              <div className="inline-flex border rounded-lg overflow-hidden">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3">-</button>
                <span className="px-4 py-2">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-3">+</button>
              </div>
            </div>

            <button
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow"
              onClick={() => addItem(product, qty, "250 g")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Similar products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["/veg5.png", "/veg6.png", "/veg7.png", "/veg1.png"].map((img, i) => (
              <div key={i} className="rounded-2xl bg-white shadow overflow-hidden">
                <img src={img} alt="similar" className="h-40 w-full object-cover" />
                <div className="p-3">
                  <div className="text-sm font-medium text-gray-800">Rs. 200</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


