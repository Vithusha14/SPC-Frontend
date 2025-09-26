import React from 'react';
import Headerpattern from '../assets/Header pattern.svg';
import logo from '../assets/logo.svg';
import Divider from '../assets/Divider.svg';

// Button images
import AboutUsButton1 from '../assets/About us primary button.svg';
import AboutUsButton2 from '../assets/About us secondary pattern.svg';
import AboutUsButton3 from '../assets/aboutusbutton3.svg';

const AboutUs = () => {
  return (
    <section className="relative bg-[#2c1810] py-24 overflow-hidden">
      {/* Decorative SVG background */}
      <div
        className="absolute inset-0 opacity-30 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='paisley' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M30,10 Q50,20 30,30 Q10,20 30,10 Z' fill='%23ff6b35' opacity='0.1'/><circle cx='30' cy='20' r='3' fill='%23ffd700' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23paisley)'/></svg>")`,
          zIndex: 1,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-orange-500 font-semibold font-[Aclonica] uppercase tracking-widest mb-3">
            ABOUT US
          </h2>
          <h1 className="text-3xl md:text-4xl text-white  font-[Aclonica] mb-6 leading-tight">
            What We Stand For
          </h1>
          <div className="flex justify-center items-center">
            <img src={Headerpattern} alt="Header pattern" className="h-8" />
          </div>
        </div>

        {/* Values buttons */}
        <div className="flex justify-center gap-5 flex-wrap mb-12">
          {/* Primary button */}
          <div className="relative">
            <img
              src={AboutUsButton1}
              alt="Quality Button"
              className="w-[220px] h-[70px] object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[#2c1810] font-[Aclonica] text-lg font-semibold">
              Quality
            </span>
          </div>

          {/* Secondary button 1 */}
          <div className="relative">
            <img
              src={AboutUsButton2}
              alt="Freshness Button"
              className="w-[220px] h-[70px] object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-[Aclonica] text-lg font-semibold">
              
            </span>
          </div>

          {/* Secondary button 2 */}
          <div className="relative">
            <img
              src={AboutUsButton3}
              alt="Sustainability Button"
              className="w-[220px] h-[70px] object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-[Aclonica] text-lg font-semibold">
              
            </span>
          </div>
        </div>

        {/* Content Section */}
<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
  {/* Logo */}
  <div className="flex-shrink-0">
    <img
      src={logo}
      alt="Company Logo"
      className="w-[375px] h-[317px] rounded-[12.6px] object-contain"
    />
  </div>

  {/* Divider right next to logo */}
  <div className="flex-shrink-0 flex justify-center">
    <img
      src={Divider}
      alt="Divider"
      className="w-[28px] h-[290px]"
    />
  </div>

  {/* Description */}
  <div className="flex-1">
    <p className="text-white text-base md:text-lg font-[Aclonica] opacity-90 leading-relaxed text-left md:text-left">
      Quality is not just a standard—it’s our signature. We handpick
      every product, ensuring it meets our high benchmarks for taste,
      texture, and presentation. From the aroma of freshly baked bread
      to the smooth finish of premium chocolates, every detail is
      evaluated to deliver a refined experience. Our relationships with
      trusted farmers, suppliers, and artisans are built on years of
      shared commitment to excellence, so you can shop with complete
      confidence.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutUs;
