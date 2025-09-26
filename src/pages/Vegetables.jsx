import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import allButton from "../assets/allbutton.svg";
import vegetableButton from "../assets/vegetablebutton.svg";
import fruitButton from "../assets/fruitbutton.svg";

const vegItems = [
  { id: "carrot", name: "Carrot", oldPrice: 230, price: 200, unit: "/ Kg", off: 13, image: "/veg1.png" },
  { id: "leeks", name: "Leeks", oldPrice: 230, price: 200, unit: "/ Kg", off: 11, image: "/veg2.png" },
  { id: "sweet-potato", name: "Sweet potato", oldPrice: 230, price: 200, unit: "/ Kg", off: 17, image: "/veg3.png" },
  { id: "Beans", name: "Beans", oldPrice: 230, price: 200, unit: "/ Kg", off: 17, image: "/veg4.png" },
  { id: "cabbage", name: "Cabbage", oldPrice: 230, price: 200, unit: "/ Kg", off: 9, image: "/veg5.png" },
  { id: "potato", name: "Potato", oldPrice: 230, price: 200, unit: "/ Kg", off: 12, image: "/ve6.png" },
  { id: "broccoli", name: "Broccoli", oldPrice: 230, price: 200, unit: "/ Kg", off: 19, image: "/veg6.png" },
  { id: "lime", name: "Lime", oldPrice: 230, price: 200, unit: "/ Kg", off: 23, image: "/veg7.png" },
];

const fruitItems = [
  { id: "banana", name: "Banana", oldPrice: 230, price: 200, unit: "/ Kg", off: 13, image: "/banana.png" },
  { id: "papaya", name: "Papaya", oldPrice: 230, price: 200, unit: "/ Kg", off: 12, image: "/pappaya.png" },
  { id: "pineapple", name: "Pineapple", oldPrice: 230, price: 200, unit: "/ Kg", off: 8, image: "/fruit3.png" },
  { id: "mango", name: "Mango", oldPrice: 230, price: 200, unit: "/ Kg", off: 10, image: "/fruit4.png" },
  { id: "orange", name: "Orange", oldPrice: 230, price: 200, unit: "/ Kg", off: 9, image: "/orange.png" },
  { id: "cherries", name: "Cherries", oldPrice: 230, price: 200, unit: "/ Kg", off: 14, image: "/fruit6.png" },
  { id: "dragon", name: "Dragon", oldPrice: 230, price: 200, unit: "/ Kg", off: 15, image: "/fruit7.png" },
  { id: "apple", name: "Apple", oldPrice: 230, price: 200, unit: "/ Kg", off: 11, image: "/fruit8.png" },
];

const stories = [
  { id: 1, title: "The Art of Perfect Chicken Biriyani: SPC’s Signature Recipe", author: "Radha.M", date: "18 Aug 2025", image: "/otherveg1.png" },
  { id: 2, title: "A Sip of Tradition", author: "Aishwath Kanna", date: "18 Aug 2025", image: "/otherveg2.png" },
  { id: 3, title: "Green Living: Bringing Nature Home with SPC Plants", author: "Mohan.R", date: "18 Aug 2025", image: "/otherveg3.png" },
];

export default function Vegetables() {
  const [activeTab, setActiveTab] = useState("all");

  const slides = [
      { key: "all", image: allButton },
      { key: "vegetables", image: vegetableButton },
      { key: "fruits", image: fruitButton },
  ];

  return (
    <div className="min-h-screen bg-orange-50/60">
      <Navbar isFixed={false} />

  {/* Hero Section */}
      <section
        className="relative min-h-[500px] bg-gradient-to-r from-green-900/90 to-green-800/90"
        style={{
          backgroundImage: "url('/ve6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
}}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">SPC Fruits & Vegetables</h1>

              <div className="bg-teal-600/90 rounded-2xl p-8 space-y-4" style={{ width: "1201px", height: "316px" }}>
                <p className="text-lg text-teal-100">Fresh Veggie Deals Just for You!</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">FARM FRESHNESS</h2>
                <p className="text-xl font-semibold text-yellow-300">UP to 20% OFF</p>

                {/* Dots indicator */}
                <div className="flex gap-2 pt-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Content - Fruit Illustrations */}
            <div className="relative w-full h-64 lg:h-96"></div>
          </div>
        </div>
      </section>

      {/* Category buttons */}
        <div
          className="sticky top-0 z-10 bg-white/90 backdrop-blur"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="mx-auto flex items-center justify-center px-4 py-3">
            <div className="relative w-full max-w-2xl overflow-hidden">
            <div className="flex">
                {slides.map((s) => (
                  <div key={s.key} className="w-full flex items-center justify-center">
                    <button
                      onClick={() => setActiveTab(s.key)}
                      className="focus:outline-none"
                      aria-label={`Show ${s.key}`}
                    >
                      <img
                        src={s.image}
                        alt={s.key}
                        className={`h-12 md:h-14 select-none transition-transform ${
                          activeTab === s.key ? "scale-105" : "opacity-80"
                        }`}
                        draggable={false}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add Padding Below the Sticky Header to Prevent Overlap */}
        <div className="mt-32">
        <div className="mt-6 w-full max-w-3xl relative mx-auto">
          <input
            className="w-full rounded-full border border-gray-200 py-3 pl-12 pr-12 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="Search a beverage"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full w-9 h-9 flex items-center justify-center">
            <span className="text-sm">⏎</span>
          </button>
        </div>

          {/* Vegetables Section */}
          <div className="flex items-center justify-between mt-10">
            <h3 className="text-gray-700 font-semibold font-[Aclonica]">
              Grab the best deal on <span className="text-emerald-700">Vegetables</span>
            </h3>
            <Link to="#" className="text-gray-700 text-sm hover:underline font-[Aclonica]">
              View all
            </Link>
          </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vegItems.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group rounded-2xl transition overflow-hidden">
                <div className="relative p-3">
                  <span className="absolute left-4 top-4 text-[10px] font-semibold text-white bg-gray-900/80 rounded-full px-2 py-1">{p.off}%</span>
                  <div className="rounded-xl overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-56 w-full object-cover group-hover:scale-[1.02] transition" />
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-gray-800 font-medium">{p.name}</p>
                  <div className="text-xs text-gray-400 line-through">₹{p.oldPrice}.00</div>
                  <div className="text-sm"><span className="font-semibold">₹{p.price}.00</span> <span className="text-gray-500">{p.unit}</span></div>
                  <div className="mt-2 flex items-center gap-4">
                    <button className="w-6 h-6 rounded-full border flex items-center justify-center text-xs">+</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        {/* Fruits Section */}
          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-gray-700 font-semibold font-[Aclonica] ">Grab the best deal on <span className="text-emerald-700">Fruits</span></h3>
            <Link to="#" className="text-gray-700 text-sm hover:underline font-[Aclonica]">View all</Link>
          </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {fruitItems.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group rounded-2xl transition overflow-hidden">
                <div className="relative p-3">
                  <span className="absolute left-4 top-4 text-[10px] font-semibold text-white bg-gray-900/80 rounded-full px-2 py-1">{p.off}%</span>
                  <div className="rounded-xl overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-56 w-full object-cover group-hover:scale-[1.02] transition" />
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-gray-800 font-medium">{p.name}</p>
                  <div className="text-xs text-gray-400 line-through">₹{p.oldPrice}.00</div>
                  <div className="text-sm"><span className="font-semibold">₹{p.price}.00</span> <span className="text-gray-500">{p.unit}</span></div>
                  <div className="mt-2 flex items-center gap-4">
                    <button className="w-6 h-6 rounded-full border flex items-center justify-center text-xs">+</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stories */}
          <div className="mt-12 flex items-center justify-between">
            <h3 className="text-emerald-700 font-semibold font-[Aclonica] ">Our stories</h3>
            <Link to="#" className="text-gray-700 text-sm hover:underline font-[Aclonica]">View all</Link>
          </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div key={s.id} className="rounded-2xl bg-white shadow overflow-hidden">
                <img src={s.image} alt={s.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="inline-block w-2 h-2 bg-gray-300 rounded-full" />
                    <span>{s.author}</span>
                    <span>•</span>
                    <span>{s.date}</span>
                  </div>
                  <p className="mt-2 font-medium text-gray-800 leading-snug">{s.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
  );  
}
