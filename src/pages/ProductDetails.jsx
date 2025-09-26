import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../components/CartContext.jsx";
import addtocard from "../assets/addtocard.svg";
import store from "../assets/store.svg";
import { Star } from "lucide-react";

const CATALOG = {
  carrot: {
    id: "carrot",
    name: "Carrot",
    price: 120,
    image: "https://images.unsplash.com/photo-1546549039-3883ebc69a5b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Crisp and sweet carrots, perfect for salads, soups and healthy snacking. Sourced fresh daily.",
    similar: [
      { id: "cabbage", name: "Cabbage", oldPrice: 230, price: 200, unit: "/ Kg", off: 9, image: "/veg5.png" },
  { id: "potato", name: "Potato", oldPrice: 230, price: 200, unit: "/ Kg", off: 12, image: "/ve6.png" },
  { id: "broccoli", name: "Broccoli", oldPrice: 230, price: 200, unit: "/ Kg", off: 19, image: "/veg6.png" },
  { id: "lime", name: "Lime", oldPrice: 230, price: 200, unit: "/ Kg", off: 23, image: "/veg7.png" },
    ],
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = useMemo(() => CATALOG[id] ?? CATALOG.carrot, [id]);
  const [variant, setVariant] = useState("1 kg");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, quantity, variant);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-orange-50/60">
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/public/img8.png')] bg-no-repeat bg-right-top blur-3xl" />
      </div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white shadow p-4">
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-xl overflow-hidden border border-gray-100 hidden sm:block">
                <img src={product.image} alt={`${product.name} thumbnail`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl font-bold text-gray-900">₹{product.price}<span className="text-base text-gray-500 font-medium">/ Kg</span></div>
              <div className="flex items-center gap-1 text-gray-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gray-300 text-gray-300" />
                ))}
                <span className="ml-2 text-xs text-gray-500">( 32 reviews )</span>
              </div>
            </div>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipi scing elit.</li>
            </ul>

            <div className="mt-6 space-y-3 max-w-sm">
              <div>
                <label className="text-sm text-gray-600">Packing</label>
                <div className="mt-2 flex gap-3">
                  {["250g","500g","1 kg"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setVariant(opt)}
                      className={`px-5 py-2 rounded-full border shadow-sm transition ${
                        variant === opt ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-800 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Qty</label>
                <div className="mt-2 inline-flex items-center justify-between gap-4 rounded-full border border-gray-200 bg-white px-4 py-2 w-[170px]">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">-</button>
                  <span className="font-medium">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">+</button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex">
              <button
                onClick={handleAdd}
                aria-label="Add to cart"
                className="relative inline-block select-none focus:outline-none mx-auto"
              >
                <img src={addtocard} alt="addtocard" className="h-12 md:h-12" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold tracking-wide">
                 
                </span>
            </button>
            </div>
            <img src={store} alt="store" className="h-5 md:h-5"  />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white font-[Aclonica] text-xl">
    Add to Card 
  </div>
            {/* <div className="mt-4"><Link to="/vegetables" className="text-orange-600">Back to Vegetables</Link></div> */}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12 bg-white rounded-2xl shadow">
          <div className="px-6 py-5 flex items-center justify-between border-b">
            <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-700">View all</Link>
          </div>
          <div className="divide-y">
            <div className="p-6 flex items-start gap-4">
              <img src="/profile.png" alt="user" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-800">Bharan</div>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
                <div className="text-xs text-gray-400">1 day ago</div>
                <p className="mt-2 text-gray-700 text-sm">Carrots were super fresh and crunchy! Perfect for salads and cooking. Love the quality at SPC.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <img src="/profile2.png" alt="user" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-800">BullyB</div>
                  <div className="text-yellow-500">★★★★☆</div>
                </div>
                <div className="text-xs text-gray-400">3 days ago</div>
                <p className="mt-2 text-gray-700 text-sm">Great taste and very fresh. I often buy the carrots from SPC because they last longer and taste amazing!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800" justify-center items-center >Similar Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {product.similar.map((s) => (
              <Link key={s.id} to={`/product/${s.id}`} className="bg-white rounded-xl shadow p-3 hover:shadow-lg transition">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{s.name}</p>
                    <p className="text-sm text-gray-500">₹{s.price} {s.unit}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


