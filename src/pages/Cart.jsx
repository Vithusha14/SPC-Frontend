import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../components/CartContext.jsx";

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const discount = subtotal > 500 ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-orange-50/60">
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/public/img8.png')] bg-no-repeat bg-right-top blur-3xl" />
      </div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow overflow-hidden">
            <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-gray-800 text-white text-sm font-medium">
              <div className="col-span-3">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div></div>
            </div>
            {items.length === 0 && (
              <div className="px-6 py-10 text-center text-gray-600">Your cart is empty.</div>
            )}
            {items.map((i) => (
              <div key={i.key} className="grid grid-cols-7 gap-4 px-6 py-5 items-center border-t">
                <div className="col-span-3 flex items-center gap-4">
                  <img src={i.image} alt={i.name} className="w-14 h-14 rounded object-cover" />
                  <div>
                    <div className="font-medium text-gray-900">{i.name}</div>
                    <div className="text-xs text-gray-500">{i.variant}</div>
                  </div>
                </div>
                <div className="text-gray-700">₹{i.price}</div>
                <div>
                  <div className="inline-flex border rounded-lg overflow-hidden">
                    <button onClick={() => updateQuantity(i.key, i.quantity - 1)} className="px-3">-</button>
                    <span className="px-4 py-2">{i.quantity}</span>
                    <button onClick={() => updateQuantity(i.key, i.quantity + 1)} className="px-3">+</button>
                  </div>
                </div>
                <div className="font-medium text-gray-900">₹{i.price * i.quantity}</div>
                <div>
                  <button onClick={() => removeItem(i.key)} className="text-red-500 hover:underline">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Cart total</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">₹{subtotal}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Discount</span><span className="font-medium text-green-700">- ₹{discount}</span></div>
                <div className="border-t pt-3 flex justify-between text-base"><span className="text-gray-800 font-medium">Total</span><span className="font-semibold">₹{total}</span></div>
              </div>
              <a href="/complete" className="mt-6 block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow">Confirm order</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


