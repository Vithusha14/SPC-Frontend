import React from 'react';
import Navbar from '../components/Navbar.jsx';

const cardData = [
  {
    id: 1,
    name: "Fresh Produce",
    description: "Premium quality fruits and vegetables sourced directly from local farms",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Grocery"
  },
  {
    id: 2,
    name: "Deli & Bakery",
    description: "Freshly baked bread, pastries, and premium deli meats",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Food"
  },
  {
    id: 3,
    name: "Household Items",
    description: "Everything you need for your home - cleaning supplies, kitchenware, and more",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Home"
  },
  {
    id: 4,
    name: "Health & Beauty",
    description: "Personal care products, cosmetics, and health supplements",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Beauty"
  },
  {
    id: 5,
    name: "Electronics",
    description: "Latest gadgets, home appliances, and electronic accessories",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Tech"
  },
  {
    id: 6,
    name: "Fashion & Apparel",
    description: "Trendy clothing, shoes, and accessories for all ages",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Fashion"
  }
];

const Cards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2c2c2c]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto">Discover everything we offer under one roof</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl border border-orange-500/10 w-full max-w-xs h-[450px] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-orange-500/90 px-4 py-2 rounded-full backdrop-blur text-white text-xs font-semibold uppercase tracking-wide">
                  {card.category}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between h-[250px]">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{card.name}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{card.description}</p>
                <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-orange-600 hover:to-orange-500 transition-all duration-300 uppercase tracking-wide">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;