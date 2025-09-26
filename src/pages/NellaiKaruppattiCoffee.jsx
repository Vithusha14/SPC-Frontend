import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const coffeeItems = Array.from({ length: 12 }).map((_, idx) => ({
  id: `karupatti-${idx + 1}`,
  name: "Karupatti Coffee",
  oldPrice: 260,
  price: 220,
  unit: "/ 250g",
  off: 15,
  image: "/nk.png",
}));

export default function NellaiKaruppattiCoffee() {
  return (
    <div className="min-h-screen bg-orange-50/60">
      <Navbar isFixed={false} />

  {/* Hero Section */}
      <section
        className="relative min-h-[500px] bg-gradient-to-r from-green-900/90 to-green-800/90"
        style={{
          backgroundImage: "url('/nkbg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
}}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance ">Nellai Karuppatti Coffee</h1>

              <div className="bg-[#2F1011]/90 rounded-2xl p-8 space-y-4" style={{ width: "1201px", height: "316px" }}>
                <p className="text-lg text-teal-100">Best Deals Just for You!</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">HOT BEVERAGES</h2>
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
            <div className="relative w-full h-64 lg:h-96">
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Search */}
      <div
        className="flex items-center justify-center bg-white gap-4 sticky top-0 z-10"
        style={{ padding: "10px 0", boxShadow: "0 4px 6px rgba(0,0,0,.1)" }}
      >
        <button className="relative bg-orange-100 text-gray-900 px-6 py-2 rounded-full font-medium shadow-inner">
          All
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700">Coffee</button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700">Tea</button>
      </div>

      <div className="mt-28 max-w-7xl mx-auto px-6">
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

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coffeeItems.map((p) => (
            <Link key={p.id} to={`/nk-coffee/${p.id}`} className="group rounded-2xl transition overflow-hidden">
              <div className="relative p-3">
                <span className="absolute left-4 top-4 text-[10px] font-semibold text-white bg-gray-900/80 rounded-full px-2 py-1">
                  {p.off}%
                </span>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-56 w-full object-cover group-hover:scale-[1.02] transition"
                  />
                </div>
              </div>
              <div className="px-4 pb-4">
                <p className="text-gray-800 font-medium font-[Aclonica]">{p.name}</p>
                <div className="text-xs text-gray-400 line-through">₹{p.oldPrice}.00</div>
                <div className="text-sm">
                  <span className="font-semibold">₹{p.price}.00</span>{" "}
                  <span className="text-gray-500">{p.unit}</span>
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <button className="w-6 h-6 rounded-full border flex items-center justify-center text-xs">+</button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stories strip reused */}
        <div className="mt-12 flex items-center justify-between">
          <h3 className="text-emerald-700 font-semibold">Our stories</h3>
          <a href="#" className="text-gray-700 text-sm hover:underline">
            View all
          </a>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/otherveg1.png", "/otherveg2.png", "/otherveg3.png"].map((img, i) => (
            <div key={i} className="rounded-2xl bg-white shadow overflow-hidden">
              <img src={img} alt="story" className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="text-gray-800 font-medium">A cup full of heritage and warmth</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
