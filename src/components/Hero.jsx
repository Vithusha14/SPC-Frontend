import React from 'react';
import Clippathgroup from '../assets/Clip path group.svg';
import ButtonOrange from '../assets/ButtonOrange.svg';
import ButtonView from '../assets/ButtonView.svg';
import TalkButton from '../assets/Talk button.svg'; // Ensure this file exists

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex justify-center items-center text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.4)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-5 flex flex-col items-center">
        <div className="mb-8 relative" style={{ width: '394.76px', height: '113px', left: '323px', top: '266px' }}>
          <img 
            src={Clippathgroup} 
            alt="Clippathgroup" 
            className="w-full h-full" 
            style={{ opacity: 1, transform: 'rotate(0deg)' }}
          />
        </div>
        <h1 className="text-5xl font-bold font-['Aclonica'] mb-2 drop-shadow-lg leading-tight md:text-4xl text-center">Welcome to Sydney</h1>
        <h2 className="text-5xl font-bold font-['Aclonica'] text-[#FF4B11] mb-6 drop-shadow-lg leading-tight md:text-4xl text-center">Pazhamuthir Cholai (SPC)</h2>
        <p className="text-base mb-4 font-['Aclonica'] leading-relaxed drop-shadow max-w-xl text-center">Your one-stop destination for fresh produce, delicious eats, household needs, and lifestyle shopping – all under one roof.</p>
        <p className="text-base mb-10 font-['Aclonica'] leading-relaxed drop-shadow opacity-90 max-w-lg text-center">Experience quality, freshness, and culture in one vibrant retail complex in the heart of Sydney.</p>
        <div className="flex gap-6 flex-wrap justify-center mb-4">
          <div className="relative inline-block">
            <img src={ButtonOrange} alt="Explore button" className="h-14 cursor-pointer hover:scale-105 transition-transform" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-medium"></span>
          </div>
          <div className="relative inline-block">
            <img src={ButtonView} alt="View deals button" className="h-14 cursor-pointer hover:scale-105 transition-transform" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-medium"></span>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3 z-50 md:bottom-5 md:right-5">
        <div className="relative inline-block cursor-pointer hover:scale-105 transition-transform">
          <img src={TalkButton} alt="Let's talk button" className="h-18" />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;