import React from 'react';
import Headerpattern from '../assets/Header pattern.svg';
import ADD1 from '../assets/ADD1.svg';
import ADD2 from '../assets/ADD2.svg';
import ADD3 from '../assets/ADD3.svg';
import SecondaryButtonShape from '../assets/Secondary button shape.svg';

const SpecialOffers = () => {
  return (
    <section className="relative bg-[#FCD7AC] py-20 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('../assets/About us bg pattern.svg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px auto',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-5 z-10">
        <div className="text-center mb-16">
          <h2 className="text-lg text-orange-500 font-semibold font-[Aclonica] uppercase tracking-widest mb-3">SPECIAL OFFERS</h2>
          <h1 className="text-3xl md:text-4xl text-[#2d3436] font-bold font-[Aclonica] mb-6 leading-tight">
            Enjoy exclusive deals and unbeatable <br /> discounts every week
          </h1>
          <div className="flex justify-center items-center">
            <img src={Headerpattern} alt="Header pattern" className="h-8" />
          </div>
        </div>
        {/* Cards */}
        <div className="relative flex justify-center items-start h-[400px] w-full mb-8">
          <div className="absolute w-[300px] h-[250px] top-[50px] left-[50px] flex justify-center items-center shadow-lg rounded-xl overflow-hidden">
            <img src={ADD1} alt="Offer left" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="absolute w-[350px] h-[280px] top-0 left-1/2 -translate-x-1/2 flex justify-center items-center shadow-lg rounded-xl overflow-hidden">
            <img src={ADD2} alt="Offer center" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="absolute w-[300px] h-[250px] top-[50px] right-[50px] flex justify-center items-center shadow-lg rounded-xl overflow-hidden">
            <img src={ADD3} alt="Offer right" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        {/* Button */}
        <div className="text-center mt-10">
          <div className="relative inline-block cursor-pointer transition-transform hover:-translate-y-1">
            <img src={SecondaryButtonShape} alt="Button Shape" className="w-[220px] h-12" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Aclonica] font-normal text-[14px] text-[#310000] pointer-events-none">
              Shop Exclusive Deals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;