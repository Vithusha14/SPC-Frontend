import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../components/CartContext.jsx";
import { Check } from "lucide-react";

export default function OrderComplete() {
  const { clear } = useCart();

  React.useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="min-h-screen bg-orange-50/60">
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/public/img8.png')] bg-no-repeat bg-right-top blur-3xl" />
      </div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center relative">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold mt-4">Thank you!</h1>
          <p className="text-gray-600 mt-1">Your order has been confirmed & is on the way. Check your email for the details.</p>
          <div className="mt-8 flex gap-3 justify-center">
            <a href="/vegetables" className="px-5 py-2 rounded-full border border-orange-500 text-orange-600">Go to home page</a>
            <a href="/cart" className="px-5 py-2 rounded-full bg-orange-500 text-white">Check order status</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


