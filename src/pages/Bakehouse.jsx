import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Breads Items
const breadsItems = [
  { id: "Sandwichbread", name: "Sandwich bread", oldPrice: 230, price: 200, unit: "/ Kg", off: 13, image: "/bake1.png" },
  { id: "kurakkan", name: "kurakkan bread", oldPrice: 230, price: 200, unit: "/ Kg", off: 11, image: "/bake2.png" },
  { id: "Achchubread", name: "Achchubread", oldPrice: 230, price: 200, unit: "/ Kg", off: 17, image: "/bake3.png" },
  { id: "Thattibread", name: "Thatti bread", oldPrice: 230, price: 200, unit: "/ Kg", off: 17, image: "/bake4.png" },
];

// Bun Items
const bunItems = [
  { id: "Fish", name: "Fish bun", oldPrice: 230, price: 200, unit: "/ Kg", off: 13, image: "/bun1.png" },
  { id: "Seeni sambal bun", name: "Seeni sambal bun", oldPrice: 230, price: 200, unit: "/ Kg", off: 12, image: "/bun2.png" },
  { id: "Vegetable bun", name: "Vegetable bun", oldPrice: 230, price: 200, unit: "/ Kg", off: 8, image: "/bun3.png" },
  { id: "Chicken bun", name: "Chicken bun", oldPrice: 230, price: 200, unit: "/ Kg", off: 10, image: "/bun4.png" },
];

// Cake Items
const cakeItems = [
  { id: "Butter cake", name: "Butter cake", oldPrice: 230, price: 200, unit: "/ Kg", off: 13, image: "/cake1.png" },
  { id: "Chocolate cake", name: "Chocolate cake", oldPrice: 230, price: 200, unit: "/ Kg", off: 12, image: "/cake2.png" },
  { id: "Vanilla cake", name: "Vanilla cake", oldPrice: 230, price: 200, unit: "/ Kg", off: 8, image: "/cake3.png" },
  { id: "Moose cake", name: "Moose cake", oldPrice: 230, price: 200, unit: "/ Kg", off: 10, image: "/cake4.png" },
];

// Stories
const stories = [
  { id: 1, title: "The Art of Perfect Chicken Biriyani: SPC’s Signature Recipe", author: "Radha.M", date: "18 Aug 2025", image: "/otherveg1.png" },
  { id: 2, title: "A Sip of Tradition", author: "Aishwath Kanna", date: "18 Aug 2025", image: "/otherveg2.png" },
  { id: 3, title: "Green Living: Bringing Nature Home with SPC Plants", author: "Mohan.R", date: "18 Aug 2025", image: "/otherveg3.png" },
];

export default function Breads() {
  return (
    <div className="min-h-screen bg-orange-50/60">
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/img8.png')] bg-no-repeat bg-right-top blur-3xl" />
      </div>
      <Navbar isFixed={false} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero banner */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-green-900 to-emerald-700 text-white relative mb-10 top:0" style={{ height: "563px", width: "1250px" }}>
          <img src="/img13.png" alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative p-8 md:p-12">
            <div className="flex items-center justify-between">
              <div className="text-white space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold font-[Aclonica] text-balance">SPC Fruits & Vegetables</h1>

                <div className="bg-teal-600/90 rounded-[16px] p-8 space-y-4 w-[1201px] h-[316px] opacity-100 absolute left-[43px]">
                  <p className="text-lg text-teal-100">Fresh Veggie Deals Just for You!</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">BAKERY ITEMS</h2>
                  <p className="text-xl font-semibold text-white">UP to 20% OFF</p>

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
            </div>
          </div>
        </div>

        {/* Segmented tabs + search */}
        <div className="flex items-center bg-white gap-4 sticky top-0 z-10" style={{ justifyContent: "center", padding: "10px 0", boxShadow: "0 4px 6px rgba(0,0,0,.1)", width: "100%" }}>
          <button className="relative bg-orange-100 text-gray-900 px-6 py-2 rounded-full font-medium shadow-inner">All</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700">Breads</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700">Buns</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700">Cakes</button>
        </div>

        {/* Add Padding Below the Sticky Header to Prevent Overlap */}
        <div className="mt-32">
          <div className="mt-6 w-full max-w-3xl relative">
            <input
              className="w-full rounded-full border border-gray-200 py-3 pl-12 pr-12 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Search an item"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full w-9 h-9 flex items-center justify-center">
              <span className="text-sm">⏎</span>
            </button>
          </div>

          {/* Breads Section */}
          <div className="flex items-center justify-between mt-10">
            <h3 className="text-gray-700 font-semibold font-[Aclonica]">
              Grab the best deal on <span className="text-emerald-700">Breads</span>
            </h3>
            <Link to="#" className="text-gray-700 text-sm hover:underline font-[Aclonica]">
              View all
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {breadsItems.map((p) => (
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

          {/* Bun Section */}
          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-gray-700 font-semibold font-[Aclonica]">
              Grab the best deal on <span className="text-emerald-700">Buns</span>
            </h3>
            <Link to="#" className="text-gray-700 text-sm hover:underline font-[Aclonica]">
              View all
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bunItems.map((p) => (
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

          {/* Cake Section */}
          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-gray-700 font-semibold font-[Aclonica]">
              Grab the best deal on <span className="text-emerald-700">Cakes</span>
            </h3>
            <Link to="#" className="text-gray-700 text-sm hover:underline font-[Aclonica]">
              View all
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cakeItems.map((p) => (
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
            <h3 className="text-emerald-700 font-semibold font-[Aclonica]">Our stories</h3>
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
    </div>
  );
}
