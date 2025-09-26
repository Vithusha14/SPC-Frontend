import React from 'react';
import { services } from './content';
import HeaderPattern from '../assets/Header pattern.svg';
import Pattern from '../assets/pattern.svg';
import ServicesLabel from '../assets/Services label.svg';
import Cardtitle from '../assets/Cardtitle.svg';

const OurServices = () => {
  // Service data matching the screenshot
  const services = [
    { id: 1, name: "SPC Fruits & Vegetables", image: "/image1.png" },
    { id: 2, name: "SPC Ceylon Bakehouse", image: "/img2.png" },
    { id: 3, name: "Nellai Karuppatti Coffee", image: "/img3.png" },
    { id: 4, name: "SPC Authentic Chennai Biryani", image: "/img4.png" },
    { id: 5, name: "SPC Party Store", image: "/img5.png" },
    { id: 6, name: "Dairy Products", image: "/img6.png" },
    { id: 7, name: "Snacks & Namkeen", image: "/img7.png" },
    { id: 8, name: "Pickles & Chutneys", image: "/img8.png" },
    { id: 9, name: "Frozen Foods", image: "/img6.png" },
    { id: 10, name: "Beverages", image: "/img10.png" },
    { id: 11, name: "Cooking Oils", image: "/img11.png" },
    { id: 12, name: "Lentils & Pulses", image: "/img12.png" },
    { id: 13, name: "Flour & Atta", image: "/img13.png" },
    { id: 14, name: "Ready to Cook", image: "/img12.png" },
    { id: 15, name: "Organic Products", image: "/img14.png" },
    { id: 16, name: "Festival Specials", image: "/img15.png" },
    { id: 17, name: "Ayurvedic Items", image: "/img16.png" },
    { id: 18, name: "Kitchen Essentials", image: "/img17.png" },
    { id: 19, name: "Gift Hampers", image: "/img18.png" },
  ]

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute left-0 top-0 w-40 h-full">
        <img src={Pattern} alt="Left decorative pattern" className="w-full h-40 object-contain opacity-50" />
      </div>
      <div className="absolute right-0 top-0 w-40 h-full">
        <img src={Pattern} alt="Right decorative pattern" className="w-full h-40 object-contain opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl text-gray-800 font-['Aclonica'] mb-6">OUR SERVICES </h2>
          <h2 className="text-2xl text-gray-800 font-['Aclonica'] mb-6">Where Quality meets Variety</h2>
          <img src={HeaderPattern} alt="Decorative pattern" className="h-7 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-xl shadow-lg mx-auto"
            >
              <div className="flex flex-col">
                <div className="w-[280px] h-[280px] pb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-[-20px] relative z-10 mx-auto w-[280px]">
                  <img 
                    src={Cardtitle} 
                    alt="" 
                    className="w-full h-[60px] object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-center font-['Aclonica'] text-sm px-4 max-w-[80%]">
                      {service.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
