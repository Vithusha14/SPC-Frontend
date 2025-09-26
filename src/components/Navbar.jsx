import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = ({isFixed})=> {
  return (
    <nav className="bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-lg" 
    style={{width: "80%",
        
        
        padding: "1rem 2rem",
        borderRadius: "60px",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        justifyContent: "center",
        margin: isFixed ?  "24px" :"24px auto", 
        position: isFixed ? "fixed" : "static",
        top: isFixed ? 0 : undefined,
        left: isFixed ? "50%" : undefined,
        transform: isFixed ? "translateX(-50%)" : undefined,
        zIndex: isFixed ? 1000 : undefined
      }}>
        



      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
        <span className="font-[Aclonica] text-xl font-bold">SPC</span>
        <span className="font-[Aclonica] text-lg text-yellow-400 ml-2">Pazhamuthir</span>
      </div>
      <div className="flex gap-8 items-center">
        <a href="/" className="hover:text-yellow-400 transition">Home</a>
        <a href="/about" className="hover:text-yellow-400 transition">About</a>
        <a href="/services" className="hover:text-yellow-400 transition">Services</a>
        <a href="/offers" className="hover:text-yellow-400 transition">Offers</a>
        <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
      </div>
      <div className="flex gap-4 items-center">
        <span className="text-xl hover:text-yellow-400 cursor-pointer">👤</span>
        <span className="text-xl hover:text-yellow-400 cursor-pointer">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;